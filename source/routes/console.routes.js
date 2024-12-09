//source/routes/console.routes.js
const express = require('express');
const router = express.Router();
const consoleController = require('../controllers/console.controller');

router.get('/', consoleController.getAllConsoles);
router.get('/:id', consoleController.getConsoleById);
router.post('/', consoleController.createConsole);
router.put('/:id', consoleController.updateConsole);
router.delete('/:id', consoleController.deleteConsole);

module.exports = router;