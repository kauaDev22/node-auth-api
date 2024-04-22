const { callWithErrorHandling } = require('vue');
const authService = require('../services/authService');
const userModel = require('../models/user');


exports.register = (req, res) => {
  const { email, password } = req.body;
  authService.register(email, password)
    .then(() => res.status(201).send({message: 'Usuário criado com sucesso'}))
    .catch((error) => res.status(500).send({message: 'Erro ao criar usuário' + error}));
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  authService.login(email, password)
    .then((token) => res.status(200).send({ message: 'Logado com sucesso' + token }))
    .catch((error) => res.status(401).send({message:'Erro ao logar' + error}));
};

exports.findAll = async(req, res) =>{
    try {
        const users = await userModel.findAll();
        res.status(200).send(users);
    } catch(error){
        res.status(500).send({message: 'Erro ao buscar usuários', error: error.message})
    }
}

exports.findById = async (req, res) =>{
    const {id} = req.params;
    try{
        const user = await  userModel.findById(id)
        if(!user){
            res.status(404).send({message: 'Usuário não encontrado'})
            return
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar usuário por ID', error: error.message });
    }
}