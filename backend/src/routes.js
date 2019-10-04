const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const BookingController = require('./controllers/BookingController');

// Configurando as rotas de 'User'
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

// Configurando as rotas de 'Scheduled'
router.get('/bookings', BookingController.index);
router.post('/bookings', BookingController.store);

module.exports = router;