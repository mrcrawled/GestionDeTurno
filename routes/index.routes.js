const auth = require('../controllers/autenticacion');
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

module.exports = router;