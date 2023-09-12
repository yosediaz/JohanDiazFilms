//routes/videosos.js
const { Router } = require('express');
const videosController = require('../controllers/videos');

const router = Router();

router.post('/', videosController.crearVideos);
router.get('/:videos', videosController.verVideos);



module.exports = router;