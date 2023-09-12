//controllers/videos
const Videos = require('../models/videos');

const crearVideos = async (req, res) => {
  ({
    title: "Video de presentación",
    description: "Un video introductorio sobre nuestra empresa",
    filePath: "/ruta/al/video/video1.mp4",
  });

  try {
    const nuevoVideos = new Videos(req.body);
    await nuevoVideos.save();
    res.json({ mensaje: 'Video creado', video: nuevoVideos });
  } catch (error) {
    console.error('Error al crear el video:', error);
    res.status(500).json({ mensaje: 'Error al crear el video' });
  }
};

const verVideos = async () => {
    try {
      const videos = await Videos.find(); 
      return videos;
    } catch (error) {
      console.error('Error al obtener los videos:', error);
      throw error;
    }
  };

module.exports = {
  crearVideos,
  verVideos,
};