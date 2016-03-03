var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/shortener.sqlite'
	});
}

var db = {};

db.shortener = sequelize.import(__dirname + '/models/shortener.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//this initializes the database