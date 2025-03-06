const express = require('express');
const router = express.Router();
const { registrarPropietario, verificarCorreo } = require('../../controllers/Propietario/RegistrarController.js');

// Ruta para registrar un propietario
router.post('/registrar', registrarPropietario);

// Ruta para verificar el correo electrónico
router.get('/verificar-correo/:token', verificarCorreo);

module.exports = router;
