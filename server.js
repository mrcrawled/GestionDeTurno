const express = require('express');
const bodyParser  = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

dotenv.config();
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
})

console.log(`Server running in ${process.env.PORT}`);