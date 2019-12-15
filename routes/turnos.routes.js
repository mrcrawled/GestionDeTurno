const turnosController = require('../controllers/turno');
const express = require('express');
const router = express.Router();


router.post('/asignar', turnosController.asignarTurno);

module.exports = router;