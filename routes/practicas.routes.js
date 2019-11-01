const practicas = require('../controllers/practica');

const express = require('express');
const router = express.Router();

router.get('/',practicas.getPracticas);

module.exports = router;