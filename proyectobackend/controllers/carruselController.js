// controllers/carruselController.js
const carrusel = require('../models/carrusel');

// Crear un nuevo elemento de carrusel
exports.createCarruselItem = async (req, res) => {
  try {
    const newItem = await carrusel.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error al crear un elemento de carrusel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener todos los elementos de carrusel
exports.getCarruselItems = async (req, res) => {
  try {
    const items = await carrusel.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error al obtener elementos de carrusel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un elemento de carrusel por ID
exports.updateCarruselItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Carrusel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error('Error al actualizar un elemento de carrusel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un elemento de carrusel por ID
exports.deleteCarruselItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Carrusel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar un elemento de carrusel:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


