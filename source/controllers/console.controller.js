//source/controllers/console.controller.js
const Console = require('../models/console.model');

exports.getAllConsoles = async (req, res) => {
    try {
        const consoles = await Console.findAll();
        res.status(200).json({ ok: true, body: consoles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.getConsoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const console = await Console.findOne({ where: { id } });
        if (!console) {
            return res.status(404).json({ ok: false, message: "CONSOLE NOT FOUND" });
        }
        res.status(200).json({ ok: true, body: console });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.createConsole = async (req, res) => {
    const consoleData = req.body;
    try {
        const newConsole = await Console.create(consoleData);
        res.status(201).json({ ok: true, body: newConsole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.updateConsole = async (req, res) => {
    const { id } = req.params;
    const consoleData = req.body;
    try {
        const updatedConsole = await Console.update(consoleData, { where: { id } });
        if (!updatedConsole[0]) {
            return res.status(404).json({ ok: false, message: "CONSOLE NOT FOUND" });
        }
        res.status(200).json({ ok: true, message: "CONSOLE UPDATED SUCCESSFULLY" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};

exports.deleteConsole = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedConsole = await Console.destroy({ where: { id } });
        if (!deletedConsole) {
            return res.status(404).json({ ok: false, message: "CONSOLE NOT FOUND" });
        }
        res.status(200).json({ ok: true, message: "CONSOLE DELETED SUCCESSFULLY" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "AN ERROR HAS OCCURRED" });
    }
};