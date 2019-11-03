const jwt = require('jsonwebtoken');

module.exports = {
    isLoggedIn: async (req, res, next) => {
        const token = req.headers['accessToken'];
        const verify = jwt.verify(token, process.env.API_KEY);
        if( verify ){
            return next();
        }
        return res.redirect('/signin');
    },
    
    isNotLoggedIn: async (req, res, next) => {
        const token = req.headers['accessToken'];
        if( !token ){
            return next();
        }
        return res.redirect('/profile');
    }
};