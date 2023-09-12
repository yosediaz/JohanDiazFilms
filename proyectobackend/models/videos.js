// models/Video.js
const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
  
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    filePath: {
      type: String,
    },
  
});

const Video = mongoose.model('Videos', videosSchema);
module.exports = Video;