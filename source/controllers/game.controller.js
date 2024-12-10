//source/controllers/game.controller.js
const { response, request } = require('express');
const GameService = require('../services/game.service');

exports.getAllGames = async (request, response) => {
    try {
        const games = await GameService.getAllGames();
        response.status(200).json({
            ok: true,
            status: 200,
            body: games
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            ok: false,
            message: "AN ERROR HAS OCCURRED"
        });
    }
};

exports.getGameById = async (request, response) => {
    const { id } = request.params;
    try {
        const game = await GameService.getGameById(id);
        if(!game) {
            return response.status(404).json({
                ok: false,
                message: "GAME NOT FOUND"
            });
        }
        response.status(200).json({
            ok: true,
            status: 200,
            body: game
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            ok: false,
            message: "AN ERROR HAS OCCURRED"
        });
    }
};

exports.createGame = async (request, response) => {
    const gameData = request.body;
    try {
        const newGame = await GameService.createGame(gameData);
        response.status(201).json({
            ok: true,
            status: 201,
            body: newGame
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            ok: false,
            message: "AN ERROR HAS OCCURRED"
        });
    }
};

exports.updateGame = async (request, response) => {
    const { id } = request.params;
    const gameData = request.body;
    try {
        const updatedGame = await GameService.updateGame(id, gameData);
        if (!updatedGame[0]) {
            return response.status(404).json({
                ok: false,
                message: "GAME NOT FOUND"
            });
        }
        response.status(200).json({
            ok: true,
            status: 200,
            message: "GAME UPDATED SUCCESSFULLY"
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            ok:false,
            message: "AN INTERNAL ERROR HAS OCCURRED"
        });
    }
};

exports.deleteGame = async (request, response) => {
    const { id } = request.params;
    try {
        const deletedGame = await GameService.deleteGame(id);
        if (!deletedGame) {
            return response.status(404).json({
                ok: false,
                message: "GAME NOT FOUND"
            });
        }
        response.status(200).json({
            ok: true,
            status: 200,
            message: "GAME DELETED SUCCESSFULLY"
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            ok: false,
            message: "AN INTERNAL ERROR HAS OCCURRED"
        });
    }
};