var express = require('express');
var validUrl = require('valid-url');
var Sequelize = require('sequelize');

var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index');
});

app.get("/:url", function(req, res) {
	var url = req.params.url;
	db.shortener.findAll({
		where: {
			shortUrl: url
		}
	}).then(function(data) {
		if(data.length<1){
					res.send({
			"error": "Couldn't find that one in the database! Hit back to try again."
		})
		}else{
			var redirector = parseInt(data[0]["url"]);
			res.redirect(redirector);
		}
	})
});

app.get("/new/:url*", function(req, res) {
	var url = req.url.slice(5);
	var shortUrl = (Math.floor(1000 + Math.random() * 9000)).toString();
	if (validUrl.isUri(url) === undefined) {
		res.send({
			"error": "Not a valid URL"
		});
	} else {
		db.shortener.create({
			url: url,
			shortUrl: shortUrl
		}).then(function(data) {
			db.shortener.findAll({
				where: {
					shortUrl: shortUrl
				}
			}).then(function(data) {
				var obj = {
					url: data[0]["url"],
					shortUrl: data[0]["shortUrl"]
				};
				obj = JSON.stringify(obj);
				res.send(JSON.parse(obj));
			});
		});
	}
});


db.sequelize.sync({}).then(function() {
	app.listen(PORT, function() {
		console.log("Express listening on port " + PORT);
	});
});