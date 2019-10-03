const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

// Configurando as rotas
router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.delete('/users/:id', UserController.destroy);

module.exports = router;