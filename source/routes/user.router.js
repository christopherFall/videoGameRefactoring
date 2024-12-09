// source/routes/user.router.js
const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Validaciones de entrada para el registro
const registerValidations = [
    body('email').isEmail().withMessage('Correo electrónico inválido.'),
    body('nickname').notEmpty().withMessage('El nickname es obligatorio.'),
    body('birthdate').isDate().withMessage('La fecha de nacimiento debe ser válida.'),
    body('country').notEmpty().withMessage('El país es obligatorio.'),
    body('city').notEmpty().withMessage('La ciudad es obligatoria.'),
];

// Rutas para usuarios
router.post('/register', registerValidations, userController.registerUser );
router.post('/login', userController.loginUser ); // Puedes eliminar esta línea si no necesitas autenticación

// Nuevas rutas
router.get('/', userController.getAllUsers); // Obtener todos los usuarios
router.get('/:id', param('id').isInt().withMessage('ID debe ser un número entero.'), userController.getUserById); // Obtener usuario por ID
router.put('/:id', registerValidations, userController.updateUser ); // Actualizar usuario
router.delete('/:id', param('id').isInt().withMessage('ID debe ser un número entero.'), userController.deleteUser ); // Eliminar usuario

module.exports = router;