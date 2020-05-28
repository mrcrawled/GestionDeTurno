const jwt = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
    isLoggedIn: async (req, res, next) => {
        try {
            const token = req.headers['access-token'];
            const verify = jwt.verify(token, process.env.API_KEY);
            if(!verify) {
                throw "Invalid Token";
            }
            next();
        } catch(error){
            next(createError(error, "Unforbidden", 403));
        }
    }
};