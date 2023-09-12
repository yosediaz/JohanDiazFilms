//Models/usuarios
const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
  nombreyApellido: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  teléfono: {
    type: String,
    required: [true, "El teléfono es obligatorio"],
    unique: true,
  },
  localidad: {
    type: String,
    required: [true, "Localidad es obligatorio"],
  },
  fechaDelEvento: {
    type: String,
    required: [true, "fecha es obligatorio"],
  },
  cuentanosDeTuEvento: {
    type: String,
    required: [true, "Campo obligatorio"],
  },
  google: {
    type: Boolean,
    default: false,
  },
  
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;

