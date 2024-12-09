//source/services/game.service.js
const Game = require('../models/game.model');

class GameService {
    async getAllGames() {
        return await Game.findAll();
    }

    async getGameById(id) {
        return await Game.findOne({
            where: { id }
        });
    }

    async createGame(data) {
        return await Game.create(data);
    }

    async updateGame(id, data) {
        return await Game.update(data, {
            where: { id }
        });
    }

    async deleteGame(id) {
        return await Game.destroy({
            where: { id }
        });
    }
}

module.exports = new GameService();