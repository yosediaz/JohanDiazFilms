// models/Photos.js
const mongoose = require('mongoose');


const photosSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: String,
  }
  
});

const Photos = mongoose.model('Photos', photosSchema);

module.exports = Photos;