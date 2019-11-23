const auth = require('../controllers/autenticacion');
const express = require('express');
const router = express.Router();
const {getObrasSociales,getObraSocialById,createObraSocial,updateObraSocial,deleteObraSocial} = require ('../controllers/obraSocial');

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


module.exports = router;