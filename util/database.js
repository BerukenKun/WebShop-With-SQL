const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Beruken993@', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;