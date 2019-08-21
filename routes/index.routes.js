const auth = require('../controllers/autenticacion');
const express = require('express');
const router = express.Router();


// Home 
router.get('/', (req, res) => {
    res.send('Home Page');
});

router.post('/login', auth.loginSession );
router.post('/logout', auth.logoutSession );

module.exports = router;