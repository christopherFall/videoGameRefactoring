// source/services/user.service.js
const User = require('../models/user.model');

const createUser  = async (userData) => {
    const { email, nickname, birthdate, country, city } = userData;

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) throw new Error('El correo ya está registrado.');

    const existingNickname = await User.findOne({ where: { nickname } });
    if (existingNickname) throw new Error('El nickname ya está registrado.');

    const user = await User.create({ email, nickname, birthdate, country, city });
    return user;
};

const findAllUsers = async () => {
    return await User.findAll();
};

const findUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser  = async (id, userData) => {
    const user = await findUserById(id);
    if (!user) throw new Error('Usuario no encontrado.');

    return await user.update(userData);
};

const deleteUser  = async (id) => {
    const user = await findUserById(id);
    if (!user) throw new Error('Usuario no encontrado.');

    await user.destroy();
};

module.exports = { createUser , findAllUsers, findUserById, updateUser , deleteUser  };