module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shortener', {
		url: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}
		},
		shortUrl: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: false
		},
		isValid: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false
		}
	});
};