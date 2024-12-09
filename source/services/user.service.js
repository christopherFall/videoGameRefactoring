// source/services/user.service.js
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser  = async (userData) => {
  const { email, nickname, birthdate, country, city, password } = userData;

  // Validaciones únicas para email y nickname
  const existingEmail = await User.findOne({ where: { email } });
  if (existingEmail) throw new Error('El correo ya está registrado.');

  const existingNickname = await User.findOne({ where: { nickname } });
  if (existingNickname) throw new Error('El nickname ya está registrado.');

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Creación del usuario
  const user = await User.create({ email, nickname, birthdate, country, city, password: hashedPassword });
  return user;
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

module.exports = { createUser , findUserByEmail };