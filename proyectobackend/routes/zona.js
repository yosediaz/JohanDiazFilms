// routes/zona.Routes.js
const express = require('express');
const router = express.Router();
const { verificarZona, renderMapPage } = require('../controllers/zona');


// Consulta por localidad o ciudad
router.post('/verificar-zona', verificarZona);




module.exports = router;