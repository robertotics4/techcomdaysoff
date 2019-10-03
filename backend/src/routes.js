const express = require('express');
const router = express.Router();

// Configurando as rotas
router.get('/', (req, res) => {
    return res.json({ msg: 'Hello World' });
});

module.exports = router;