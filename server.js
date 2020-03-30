"use strict";
global.rootRequire = name => require(`${__dirname}/${name}`);
require('dotenv').config();

const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const router = express.Router();
const dbconfig = require('./database/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const components = [
    require('./components/authentication/authentication.routes'),
    require('./components/usuario/usuario.routes'),
    require('./components/paciente/paciente.routes'),
    require('./components/obra-social/obra-social.routes'),
    require('./components/turno/turno.routes'),
    require('./components/rol/rol.routes'),
];

components.forEach((component) => {
    const instance = new component(router, dbconfig);
    instance.exports();
})
router.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message
    });
});

app.use('/',router);


app.listen(process.env.PORT || 8000, (err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
})

console.log(`Server running in ${process.env.PORT}`);