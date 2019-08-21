const obra_social = require('../controllers/obraSocial');
const express = require('express');
const router = express.Router();

router.get('/', obra_social.getObrasSociales);
router.post('/', obra_social.createObraSocial);

router.get('/:id', obra_social.getObraSocialById);
router.put('/:id', obra_social.updateObraSocial);
router.delete('/:id', obra_social.deleteObraSocial);


module.exports = router;