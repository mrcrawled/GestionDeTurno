const autenticacionMethod = {};
const db = require('../database/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

autenticacionMethod.getSignIn = async (req, res, next) => {
    res.render('autenticacion/signin', {status:"OK"});
};

autenticacionMethod.postSignIn = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const usuario = await db.query('select * from usuarios where username = $1',[username]);
        if( !usuario ){
            res.render("autenticacion/signin", {
                status: "ERROR",
                msg_error: "Usuario incorrecto."
            });
            return;
        }
        const matches = usuario.rows[0];
        const verifyPassword = await bcrypt.compareSync(password,matches.password);

        if( !verifyPassword ){
            res.render("autenticacion/signin", {
                status: "ERROR",
                msg_error: "Contraseña incorrecta."
            });
            return;
        }
        const token = await jwt.sign( {usuario:username}, process.env.API_KEY, {expiresIn: 24*60*60} );
        res.send({
            auth:true,
            accessToken:token
        });
    }
     catch(error) {
        next(error);
    }
};

autenticacionMethod.getSignUp = async (req, res, next) => {
    res.render('autenticacion/signup', {status:"OK"});
};

autenticacionMethod.postSignUp = async (req, res, next) => {
    
};

autenticacionMethod.profile = async (req, res, next) => {
    res.render('usuario/profile');
};

autenticacionMethod.getLogOut = async (req, res, next) => {
    res.redirect('/');
};

module.exports = autenticacionMethod;