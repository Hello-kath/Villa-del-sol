const express = require('express');
const router = express.Router();
const { login } = require('../../controllers/IniciarSesion/InicioSesionController');

// Ruta para registrar un apartamento
router.post('/login', login);

module.exports = router;