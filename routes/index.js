const usuario = require('../controllers/usuario');
const obra_social = require('../controllers/obraSocial');
const paciente = require('../controllers/paciente');
const express = require('express');
const router = express.Router();
const {
    isLoggedIn,
    isNotLoggedIn
} = require('../utils/auth');

// Home 
router.get('/', (req, res) => {
    res.send('Home Page');
});

/*Usuarios*/
router.get('/usuarios', usuario.getUsuarios);
router.post('/usuarios', usuario.createUsuario);
router.put('/usuarios/:id', usuario.updateUsuario);
router.delete('/usuarios/:id', usuario.deleteUsuario);

/*Obras Sociales*/
router.get('/obras_sociales', obra_social.getObrasSociales);
router.get('/obras_sociales/:id', obra_social.getObraSocialById);
router.post('/obras_sociales', obra_social.createObraSocial);
router.put('/obras_sociales/:id', obra_social.updateObraSocial);
router.delete('/obras_sociales/:id', obra_social.deleteObraSocial);

/*Pacientes*/
router.get('/pacientes', paciente.getPacientes);
router.get('/pacientes/:id', paciente.getPacienteById);
router.post('/pacientes', paciente.createPaciente);
router.put('/pacientes/:id', paciente.updatePaciente);
router.delete('/pacientes/:id', paciente.deletePaciente);

module.exports = router;