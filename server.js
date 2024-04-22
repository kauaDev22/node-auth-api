const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
