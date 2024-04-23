const db = require('../config/database');
const imagemModel = require('../models/imagem');

exports.uploadImagem = (req, res)=>{
    const {originalname, buffer} = req.file;

    db.query('INSERT INTO imagens (nome, dados_imagem) VALUES (?, ?)', [originalname, buffer], (error, result) => {
        if (error) {
          console.error('Erro ao inserir imagem no banco de dados:', error);
          res.status(500).send('Erro ao inserir imagem');
          return;
        }
        res.status(200).send('Imagem inserida com sucesso');
      });
};

exports.getImagemAll = async (req, res) =>{
    try {
        const imagems = await imagemModel.getImagemAll();
        res.status(200).send(imagems)
    }catch(error){
      res.status(500).send({message: 'Erro ao buscar imagens', error: error.message})
    }
}