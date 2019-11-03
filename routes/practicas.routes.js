const practicas = require('../controllers/practica');
const express = require('express');
const router = express.Router();


router.get('/', practicas.getPracticasProfesionales);
router.post('/', practicas.createPracticasProfesionales);
router.put('/:id', practicas.updatePracticaProfesional);
router.delete('/:id', practicas.deletePracticaProfesional);


module.exports = router;