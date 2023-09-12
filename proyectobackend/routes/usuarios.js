//routes/usuarios.js
const { Router } = require('express');
const usuariosController = require('../controllers/usuarios');

const router = Router();

router.post('/', usuariosController.crearUsuarios);
router.get('/:correo', usuariosController.mostrarUsuarioPorCorreo);
router.put('/:correo', usuariosController.modificarUsuarioPorCorreo);
router.delete('/:correo', usuariosController.eliminarUsuarioPorCorreo);

module.exports = router;

