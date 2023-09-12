// models/Zona.js
const mongoose = require('mongoose');


const zonaSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Address obligatorio"],
  },
  
});

const Zona = mongoose.model('Zona', zonaSchema);

module.exports = Zona;