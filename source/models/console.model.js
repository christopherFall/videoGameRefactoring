// source/models/console.model.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Console extends Model {}

Console.init(
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
        company_id: {
            type: DataTypes.BIGINT.UNSIGNED, // Asegúrate de que sea UNSIGNED
            allowNull: false,
            references: {
                model: 'company', // Nombre de la tabla referenciada
                key: 'id', // Clave primaria de la tabla referenciada
            },
        },
    },
    {
        sequelize,
        modelName: 'Console',
        tableName: 'console', // Nombre de la tabla en la base de datos
    }
);

module.exports = Console;