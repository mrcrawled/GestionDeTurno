const paciente = require('../controllers/paciente');
const express = require('express');
const router = express.Router();

router.get('/', paciente.getPacientes);
router.post('/', paciente.createPaciente);

router.get('/:id', paciente.getPacienteById);
router.put('/:id', paciente.updatePaciente);
router.delete('/:id', paciente.deletePaciente);

module.exports = router;