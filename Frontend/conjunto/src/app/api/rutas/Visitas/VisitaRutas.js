const express = require('express');
const router = express.Router();
const { RegistrarApt, listarApartamentos } = require('../../controllers/Visitas/VisitaController');

// Ruta para registrar una visita
router.post('/registrarApt', RegistrarApt);

//Ruta para mostrar las visitas
router.get('/listarApt', listarApartamentos);


module.exports = router;