//source/routes/game.router.js
const express = require('express');
const router = require("express").Router();
const gameController = require('../controllers/game.controller');

router.get("/game", gameController.getAllGames);
router.get('/game/:id', gameController.getGameById);
router.post('/game', gameController.createGame);
router.put('/game/:id', gameController.updateGame);
router.delete('/game/:id', gameController.deleteGame);

module.exports = router;