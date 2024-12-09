//source/models/game.model.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        console_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
              model: 'console', // Nombre de la tabla referenciada
              key: 'id', // Clave primaria de la tabla referenciada
            },
        },
    },
    {
        sequelize,
        modelName: 'Game',
    }
);

module.exports = Game;