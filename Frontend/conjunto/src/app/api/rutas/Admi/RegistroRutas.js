const express = require('express');
const router = express.Router();
const { RegistrarAdmi } = require('../../controllers/Admi/RegistroAdmiController');

// Ruta para registrar un apartamento
router.post('/registrarAdm', RegistrarAdmi);

module.exports = router;
