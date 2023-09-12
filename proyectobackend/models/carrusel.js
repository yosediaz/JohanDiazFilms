// models/Carrusel.js
const mongoose = require('mongoose');

const carruselSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Carrusel', carruselSchema);
