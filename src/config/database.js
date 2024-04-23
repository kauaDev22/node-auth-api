const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'auth_projeto'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

connection.query('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL)', (error, results) => {
    if (error) {
      console.error('Erro ao criar tabela:', error);
      return;
    }
    console.log('Tabela criada com sucesso');
});

connection.query(`
  CREATE TABLE IF NOT EXISTS imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    dados_imagem LONGBLOB
  )
`, (error, result) => {
  if (error) {
    console.error('Erro ao criar tabela:', error);
    return;
  }
  console.log('Tabela de imagem criada com sucesso');
});
module.exports = connection;

