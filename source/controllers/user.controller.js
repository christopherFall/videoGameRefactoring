// source/controllers/user.controller.js
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');

const registerUser  = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userService.createUser (req.body);
        res.status(201).json({
            message: 'Usuario creado con éxito',
            data: { id: user.id, email: user.email, nickname: user.nickname },
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.findAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.findUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser  = async (req, res) => {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedUser  = await userService.updateUser (id, req.body);
        res.status(200).json({
            message: 'Usuario actualizado con éxito',
            data: updatedUser ,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser  = async (req, res) => {
    const { id } = req.params;
    try {
        await userService.deleteUser (id);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser  = async (req, res) => {
    res.status(501).json({ message: 'Función no implementada' });
};

module.exports = { registerUser , getAllUsers, getUserById, updateUser , deleteUser , loginUser  };