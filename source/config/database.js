//source/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: 3306,
});

sequelize.sync()

    .then(() => {
        console.log('Las tablas han sido creadas automáticamente.');
    })
    .catch((error) => {
        console.error('Error al crear las tablas:', error);
    });

module.exports = sequelize;