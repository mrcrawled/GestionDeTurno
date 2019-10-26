const db = require('../database/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const controller = {};

controller.resetPassword = async (req, res, next) => {
        const {id, email } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        if (email === "") {
           res.json('La direccion de mail es requerida'); 
        }
        const usuario = await db.query('SELECT * FROM usuarios WHERE EMAIL = $1', [email]);
        if (usuario === null){
            console.log('No se encuentra la dirección de mail');
        }else{
            const recuperarContrasenia = await db.query('UPDATE usuarios set password = $1 WHERE id = $2 ',[password,id])
            const token = jwt.sign({ usuario: recuperarContrasenia }, process.env.API_KEY, { expiresIn: 24 * 60 * 60 });
    
        }

    // //Se define el transporte del mail importado de a libreria nodemailer
    const transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com', // hostname
        secure: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASSWORD}`,
        },
        tls: {
            rejectUnauthorized: false
        }
    }));
    
const mailOptions = {
    from: 'Remitente',
    to: `${process.env.USERMAIL}`,
    subject: 'Recuperar Contraseña',
    text: `Has recibido este mail porque usted (o alguien) ha solicitado recuperar la contraseña.` +
    `Por favor haga clicl en el siguiente enlace o peguelo en su navegador para completar el proceso:\n\n` +
    `http://localhost:4000/recuperarcontrasenia/${token}\n\n` +
    `Si no realizo la solicitud, ignore este correo y su contraseña no será modificada.\n`

};

console.log('Mandando el mail ...');

// Se envia el mail 
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log('Ha ocurriedo un errro al enviar el mail'.error);
        res.status(500).send(error.message);
    } else {
        console.log("Email sent");
        res.status(200).json('Correo ha sido enviado ccorrectamente');
    }
});

    
}

module.exports = controller;