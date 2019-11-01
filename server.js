require('dotenv').config();

const express = require('express');
const bodyParser  = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes'));
app.use('/usuarios', require('./routes/usuarios.routes'));
app.use('/pacientes', require('./routes/index'));
app.use('/obras-sociales', require('./routes/index'));
app.use('/practicas', require('./routes/practicas.routes'));

app.use('/roles', require('./routes/roles.routes'));

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
})

console.log(`Server running in ${process.env.PORT}`);