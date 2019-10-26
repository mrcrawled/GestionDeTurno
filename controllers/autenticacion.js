const db = require('../database/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const controller = {};

controller.loginSession = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const usuario = await db.query('select * from usuarios where username = $1', [username]);
        if (!usuario) {
            res.json({
                "status": "ERROR",
                "msg": "Usuario incorrecto."
            });
            return;
        }
        const matches = usuario.rows[0];
        const verifyPassword = bcrypt.compareSync(password, matches.password);

        if (!verifyPassword) {
            res.json({
                "status": "ERROR",
                "msg": "Contraseña incorrecta."
            });
            return;
        }
        const token = jwt.sign({ usuario: username }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });
        const rol = await db.query('select rol_tipo from roles where id = $1', [matches.id_rol]);
        res.cookie('x-access-token', token, {httpOnly: true});
        res.json({
            "status": "OK",
            "rol": rol.rows[0].rol_tipo
        });
    }
    catch (error) {
        next(error);
    }
};

controller.logoutSession = async (req, res, next) => {
    res.clearCookie('x-access-token',{httpOnly: true});
    res.json({
        "status": "OK",
        "rol": "Invitado"
    })
    next();
};

module.exports = controller;