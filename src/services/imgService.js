const db = require('../config/database');


exports.uploadImagem = (nome, dadosImagem) =>{
    return new Promise((resolve, reject) =>{
        dadosImagem.query('INSERT INTO imagens (nome, dados_imagem) VALUES (?, ?)', [nome, dadosImagem], (error, result) =>{
            if (error){
                reject(error)
                return
            }
            resolve(result);
        });
    });
};

