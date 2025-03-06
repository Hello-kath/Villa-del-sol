const express = require('express');
const router = express.Router();
const { RegistrarApt } = require('../../controllers/Admi/ApartamentoController');

// Ruta para registrar un apartamento
router.post('/registrarApt', RegistrarApt);

module.exports = router;
