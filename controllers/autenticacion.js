const db = require('../database/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

class AuthenticationController {
    loginSession = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const usuario = await db.query('SELECT * FROM usuarios WHERE username = $1 LIMIT 1', [username]);
            if (!usuario) 
                throw new Error("Usuario incorrecto");
            const verifyPassword = bcrypt.compareSync(password, usuario.password);
            if (!verifyPassword)
                throw new Error("Contraseña incorrecta");
            const token = jwt.sign({ usuario: username }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });
            const rol = await db.query('SELECT rol_tipo FROM roles WHERE id = $1 LIMIT 1', [usuario.id_rol]);
            res.cookie('x-access-token', token, {httpOnly: true});
            res.status(200).json({
                "rol": rol.rol_tipo
            });
        }
        catch (error) {
            res.status(400).json({ "message": error.message });
        }
    };
    
    logoutSession = async (req, res, next) => {
        res.clearCookie('x-access-token',{httpOnly: true});
        res.status(200).json({
            "rol": "Invitado"
        });
    };
    
    changePassword = async (req, res, next)  => {
        try{
            const { token, id } = req.params;
            const verify = await jwt.verify( token, process.env.API_KEY);
            if( !verify )
                throw new Error("Token invalido");
            const password = bcrypt.hashSync(req.body.password, 10);
            const wasUpdated = await db.query('UPDATE usuarios set password = $1 WHERE id = $2 ', [password, id]);
            if(!wasUpdated)
                throw new Error("Se produjo un error al actualizar su contraseña");
            res.sendStatus(200);
        } catch(error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    resetPassword = async (req, res, next) => {
        try {
            const { email } = req.body;
            if (email === "")
                throw new Error('La direccion de mail es requerida');
            const usuario = await db.query('SELECT * FROM usuarios WHERE EMAIL = $1 LIMIT 1', [email]);
            let token;
            if (!usuario) 
                throw new Error('No se encuentra la dirección de mail');
            token = jwt.sign({ usuario: usuario.username }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });

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
                    `http://localhost:4000/change-password/${token}/${usuario.id}\n\n` +
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
            res.status(400).json({ "message": error.message });
        }
    }
}

module.exports = new AuthenticationController();