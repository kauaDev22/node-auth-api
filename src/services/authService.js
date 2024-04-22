const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

exports.register = async (email, password) => {
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('E-mail já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userModel.create(email, hashedPassword);
};

exports.login = async (email, password) => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign({ email: user.email }, 'sua_chave_secreta', { expiresIn: '1h' });
  return token;
};
