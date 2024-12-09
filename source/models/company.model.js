// source/models/company.model.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Company extends Model {}

Company.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED, // Asegúrate de que sea UNSIGNED
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Company',
        tableName: 'company', // Nombre de la tabla en la base de datos
    }
);

module.exports = Company;