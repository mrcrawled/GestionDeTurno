const rolesController = require('../controllers/rol');
const express = require('express');
const router = express.Router();

router.get('/', rolesController.getRoles);
router.post('/', rolesController.createRol);
router.put('/:id', rolesController.updateRol);
router.delete('/:id', rolesController.deleteRol);

module.exports = router;