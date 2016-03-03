var express = require('express');
var shortUrl = require('shorturl');
var validUrl = require('valid-url');
var Sequelize = require('sequelize');

var db = require('./db.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//console.log(validUrl.isWebUri(goodUrl));

app.get('/', function(req, res) {
	res.render('index');	
});

app.get('/new/:id//:www', function(req, res){
	var userUrl = req.params.id + "//" + req.params.www;
	var validity;
	if(validUrl.isWebUri(userUrl) === undefined){
		validity = false;
	}else{
		validity = true;
	}
	console.log(validity);
	res.send({
		"URL": userUrl,
		"isValid": validity
	});

/*
	db.create({
		url: "test",
		shortUrl: "test",
		isValid: true
	}).then(function(data){
		console.log("Synched!");
	});
*/
});

app.get('/:shortened', function(req, res){

});


db.sequelize.sync({
	force: true
}).then(function() {
	app.listen(PORT, function() {
		console.log("Express listening on port " + PORT);
	});
});