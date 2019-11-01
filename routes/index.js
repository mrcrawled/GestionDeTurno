const auth = require('../controllers/Auth/autenticacion');
const {getObrasSociales,getObraSocialById,createObraSocial,updateObraSocial,deleteObraSocial} = require ('../controllers/ObraSocial/obraSocial');
const {getPacientes,getPacienteById,createPaciente,updatePaciente,deletePaciente} = require ('../controllers/Paciente/paciente');

const express = require('express');
const router = express.Router();

// Home 
router.get('/', (req, res) => {
    res.send('Home Page');
});

router.post('/login', auth.loginSession );
router.post('/logout', auth.logoutSession );
router.post('/reset-password',auth.resetPassword);
router.post('/change-password', auth.changePassword);
router.post('/change-password/:token/:id', auth.changePassword);

//Obra Social
router.get('/obras-sociales',getObrasSociales);
router.get('/obras-sociales/:id',getObraSocialById);
router.post('/obras-sociales',createObraSocial);
router.put('/obras-sociales/:id',updateObraSocial);
router.delete('/obras-sociales/:id',deleteObraSocial);

//Pacientes
router.get('/pacientes',getPacientes);
router.get('/pacientes/:id',getPacienteById);
router.post('/pacientes',createPaciente);
router.put('/pacientes/:id',updatePaciente);
router.delete('/pacientes/:id',deleteObraSocial);


module.exports = router;