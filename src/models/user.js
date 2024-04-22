const db = require('../config/database');

exports.create = (email, password) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};

exports.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      if (results.length === 0) {
        resolve(null);
        return;
      }
      resolve(results[0]);
    });
  });
};

exports.findAll = () =>{
    return new Promise ((resolve, reject) =>{
        db.query('SELECT * FROM users', (error, results) =>{
            if(error){
                reject(error);
                return;
            }
            resolve(results);
        });
    });
};

exports.findById = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) =>{
            if(error){
                reject(error);
                return
            }
            if(results.length === 0){
                resolve(null);
            }
            resolve(results[0])
        });
    });
};