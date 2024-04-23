const express = require('express');
const imagemController = require('../controllers/imagemController')
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/upload', upload.single('imagem'), imagemController.uploadImagem);
router.get('/imagens', imagemController.getImagemAll )

module.exports = router;