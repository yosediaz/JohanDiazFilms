//routes/photos.js
const { Router } = require('express');
const photosController = require('../controllers/photos');

const router = Router();

router.post('/', photosController.crearPhotos);
router.get('/:photosId', photosController.verPhotosPorId);

module.exports = router;

