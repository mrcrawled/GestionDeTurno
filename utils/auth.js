const jwt = require('jsonwebtoken');

module.exports = {
    isLoggedIn: isLoggedIn = async (req, res, next) => {
        const token = req.headers['accessToken'];
        const verify = await jwt.verify( token, process.env.SECRET_KEY_TOKEN);
        if( verify ){
            return next();
        }
        return res.redirect('/signin');
    },
    isNotLoggedIn: isNotLoggedIn = async (req, res, next) => {
        const token = req.headers['accessToken'];
        if( !token ){
            return next();
        }
        return res.redirect('/profile');
    }
}