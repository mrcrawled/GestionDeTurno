const db = require('../database/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
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

controller.changePassword = async (req, res, next)  => {
    const { token, id } = req.params;
    const verify = await jwt.verify( token, process.env.API_KEY);
    if( !verify ){
        res.json("Token invalido");
        return;
    }
    const password = bcrypt.hashSync(req.body.password, 10);
    const resQuery = await db.query('UPDATE usuarios set password = $1 WHERE id = $2 ', [password, id]);
    res.json("Su contraseña ha sido cambiada correctamente");
}

controller.resetPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (email === "") {
            res.json('La direccion de mail es requerida');
            return;
        }
        const usuario = await db.query('SELECT * FROM usuarios WHERE EMAIL = $1', [email]);
        let token;
        if (usuario.rowCount == 0) {
            res.json('No se encuentra la dirección de mail');
            return;
        } else {
            token = jwt.sign({ usuario: usuario.rows[0].username }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });
        }

        // Se define el transporte del mail importado de a libreria nodemailer
        const transporter = nodemailer.createTransport({
            host: `${process.env.HOST_MAIL}`, // hostname
            port: process.env.PORT_MAIL, // port for secure SMTP
            secure: true, // use SSL
            auth: {
                user: `${process.env.USER_MAIL}`,
                pass: `${process.env.PASSWORD_MAIL}`,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"Gestion de Turnos" <${process.env.USER_MAIL}>`,
            to: `${email}`,
            subject: 'Recuperar Contraseña',
            text: `Has recibido este mail porque usted (o alguien) ha solicitado recuperar la contraseña.` +
                `Por favor haga clicl en el siguiente enlace o peguelo en su navegador para completar el proceso:\n\n` +
                `http://localhost:4000/change-password/${token}/${usuario.rows[0].id}\n\n` +
                `Si no realizo la solicitud, ignore este correo y su contraseña no será modificada.\n`
        };
    
        console.log('Mandando el mail ...');
        // Se envia el mail 
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Ha ocurriedo un errro al enviar el mail'.error);
                res.status(500).send(error.message);
            } else {
                console.log("Email sent");
                res.status(200).json('Correo ha sido enviado ccorrectamente');
            }
        });
    } catch(error){
        res.json({
            "message": error.message
        });
        return;
    }
}

module.exports = controller;