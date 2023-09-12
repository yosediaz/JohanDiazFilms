//controllers/usuarios
const Usuarios = require('../models/usuarios');
const { validationResult } = require('express-validator');


//Crear Usuario
const crearUsuarios = async (req, res) => {
({
  nombreyApellido: "Nombre y Apellido",
  correo: "correo@example.com",
  teléfono: "123456789",
  localidad: "Ciudad",
  fechaDelEvento: "Fecha",
  cuentanosDeTuEvento: "Cuentanos de tu evento",
  google: false,
});
  try {
    const nuevoUsuarios = new Usuarios(req.body);
    await nuevoUsuarios.save();
    res.json({ mensaje: 'Usuario creado', usuarios: nuevoUsuarios });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' });
  }
};

// Mostrar un usuario por correo
const mostrarUsuarioPorCorreo = async (req, res) => {
  try {
    const { correo } = req.params;
    const usuarios = await Usuarios.findOne({ correo });
    if (!usuarios) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ mensaje: 'Error al obtener el usuario' });
  }
};

// Modificar un usuario por correo
const modificarUsuarioPorCorreo = async (req, res) => {
  try {
    const { correo } = req.params;
    const usuarioModificado = await Usuario.findOneAndUpdate(
      { correo }, // Buscar por correo
      req.body,
      { new: true }
    );
    res.json(usuarioModificado);
  } catch (error) {
    console.error('Error al modificar el usuario:', error);
    res.status(500).json({ mensaje: 'Error al modificar el usuario' });
  }
};

// Eliminar un usuario por correo
const eliminarUsuarioPorCorreo = async (req, res) => {
  try {
    const { correo } = req.params;
    const usuarioEliminado = await Usuario.findOneAndDelete({ correo });
    res.json(usuarioEliminado);
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  crearUsuarios,
  mostrarUsuarioPorCorreo,
  modificarUsuarioPorCorreo,
  eliminarUsuarioPorCorreo,
};
