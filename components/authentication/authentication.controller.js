const AuthenticationSql = require('./authentication.sql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports = class AuthenticationController {
    constructor(db) {
        this.db = new AuthenticationSql(db);
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    loginSession = async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const usuario = await this.db.getUsuarioByUsername(username);
            if (!usuario) {
                res.json({
                    "status": "ERROR",
                    "msg": "Usuario incorrecto."
                });
                return;
            }
            const verifyPassword = bcrypt.compareSync(password, usuario.password);
            if (!verifyPassword) {
                res.json({
                    "status": "ERROR",
                    "msg": "Contraseña incorrecta."
                });
                return;
            }
            const token = jwt.sign({ usuario: username }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });
            const rol = await this.db.getRolUsuario(usuario.id_rol);
            res.cookie('x-access-token', token, {httpOnly: true});
            res.json({
                "status": "OK",
                "rol": rol.rol_tipo
            });
        }
        catch (error) {
            next(error);
        }
    };

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    logoutSession = async (req, res, next) => {
        res.clearCookie('x-access-token',{httpOnly: true});
        res.json({
            "status": "OK",
            "rol": "Invitado"
        })
        next();
    };

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    changePassword = async (req, res, next)  => {
        const { token, id } = req.params;
        const verify = await jwt.verify( token, process.env.API_KEY);
        if( !verify ){
            res.json("Token invalido");
            return;
        }
        const password = bcrypt.hashSync(req.body.password, 10);
        const resQuery = await this.db.changePassword(id, password);
        res.json("Su contraseña ha sido cambiada correctamente");
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    resetPassword = async (req, res, next) => {
        try {
            const { email } = req.body;
            if (email === "") {
                res.json('La direccion de mail es requerida');
                return;
            }
            const usuario = await this.db.getUsuarioByEmail(email);
            let token;
            if(usuario) {
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
            res.json({
                "message": error.message
            });
            return;
        }
    }
}
