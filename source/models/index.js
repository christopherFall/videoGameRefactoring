// source/models/index.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

// Importar modelos
const Game = require('./game.model');
const Company = require('./company.model');
const Console = require('./console.model');

// Definir relaciones
Company.hasMany(Console, { foreignKey: 'company_id' });
Console.belongsTo(Company, { foreignKey: 'company_id' });

Console.hasMany(Game, { foreignKey: 'console_id' });
Game.belongsTo(Console, { foreignKey: 'console_id' });

// Sincronizar modelos
const syncDatabase = async () => {
    try {
        await sequelize.sync(); // Sincronizar modelos
        console.log('Las tablas han sido creadas o actualizadas.');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
};

// Exportar modelos y la función de sincronización
module.exports = {
    sequelize,
    Game,
    Company,
    Console,
    syncDatabase
};



