const usuario = require('../controllers/usuario');
const express = require('express');
const router = express.Router();


router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.put('/:id', usuario.updateUsuario);
router.delete('/:id', usuario.deleteUsuario);

module.exports = router;