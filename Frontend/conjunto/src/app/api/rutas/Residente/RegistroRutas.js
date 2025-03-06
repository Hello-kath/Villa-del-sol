const express = require('express');
const router = express.Router();
const { registrarResidente, verificarCorreoResidente} = require('../../controllers/Propietario/RegistrarResidenteController');

// Ruta para registrar un apartamento
router.post('/Registrar', registrarResidente);

// Ruta para verificar el correo electrónico
router.get('/verificar-correo/:token', verificarCorreoResidente);
module.exports = router;