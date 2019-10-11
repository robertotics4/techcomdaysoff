const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Configurando a conexão com o banco de dados
mongoose.connect('mongodb://localhost/daysoffdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configurando as rotas
const routes = require('../routes');

// Configurando plugins
server.use(cors());
server.use(express.json());
server.use('/api', routes);

module.exports = server;