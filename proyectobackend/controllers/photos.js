const Photos = require('../models/photos');
const mongoose = require('mongoose');

const crearPhotos = async (req, res) => {
  // Obtiene los datos de la foto del cuerpo de la solicitud
  const nuevaPhotos = req.body;

  try {
    const nuevoPhotos = new Photos(nuevaPhotos); // Pasa el objeto 'nuevaPhotos' como argumento
    await nuevoPhotos.save();
    res.json({ mensaje: 'Photo creada', photos: nuevoPhotos });
  } catch (error) {
    console.error('Error al crear la photo:', error);
    res.status(500).json({ mensaje: 'Error al crear la photo' });
  }
};


const verPhotosPorId = async (req, res) => {
  try {
    // Obtén el ID de la foto desde los parámetros de la URL
    const { photosId } = req.params;

    // Realiza una consulta a tu base de datos para encontrar la foto por su campo 'id'
    const photos = await Photos.findOne({ id: photosId });

    // Si la foto no se encuentra, responde con un código de estado 404 (Not Found)
    if (!photos) {
      return res.status(404).json({ message: 'Foto no encontrada' });
    }

    // Si la foto se encuentra, responde con los datos de la foto
    res.json(photos);
  } catch (error) {
    console.error('Error al obtener la foto por ID:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



module.exports = {
  crearPhotos,
  verPhotosPorId,
};
