// routes/carruselRoutes.js
const express = require('express');
const router = express.Router();
const carruselController = require('../controllers/carruselController');

// Rutas para las operaciones CRUD de carrusel
router.post('/', carruselController.createCarruselItem);
router.get('/', carruselController.getCarruselItems);
router.put('/:id', carruselController.updateCarruselItem);
router.delete('/:id', carruselController.deleteCarruselItem);

module.exports = router;

