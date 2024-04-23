const db = require('../config/database')

exports.getImagemAll = () =>{
    return new Promise ((resolve, reject) => {
        db.query('SELECT * FROM imagens', (error, results) =>{
            if(error){
                error;
                return
            }
            resolve(results)
        })
    }) 
}
