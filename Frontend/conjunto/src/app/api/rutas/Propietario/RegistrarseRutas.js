const express = require('express');
const router = express.Router();
const { registrarPropietario, verificarCorreo, listarPropietarios, editarPropietario, eliminarPropietario} = require('../../controllers/Propietario/RegistrarController.js');

// Ruta para registrar un propietario
router.post('/registrar', registrarPropietario);

// Ruta para verificar el correo electrónico
router.get('/verificar-correo/:token', verificarCorreo);

// Ruta para listar propietarios
//http://localhost:3002/api/propietarios/listPro
router.get('/listPro', listarPropietarios);

// Ruta para editar un propietarios
//http://localhost:3002/api/propietarios/editarPro/37
router.put('/editarPro/:id', editarPropietario);

// Ruta para eliminar propietarios
//http://localhost:3002/api/propietarios/deletePro/37
router.delete('/deletePro/:id', eliminarPropietario);

module.exports = router;
