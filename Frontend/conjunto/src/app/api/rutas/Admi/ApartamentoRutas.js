const express = require('express');
const router = express.Router();
const { RegistrarApt, listarApartamentos, editarApartamento, eliminarApartamento } = require('../../controllers/Admi/ApartamentoController.js');

// Ruta para registrar un apartamento
router.post('/registrarApt', RegistrarApt);

//Ruta para mostrar los apartamentos registrados
router.get('/listarApt', listarApartamentos);

//Ruta para editar los apartamentos registrados
router.put('/editar/:id', editarApartamento);

//Ruta para eliminar un apartamento
router.delete('/delete/:id', eliminarApartamento);
module.exports = router;
