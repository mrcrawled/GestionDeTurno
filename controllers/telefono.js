const db = require('../database/config');

//Agrega Telefono
let createTelefono = async (req, res, next) => {
    try {
        const { numero, tipo, activo, id_paciente } = req.body;
        const telefono = await db.query('INSERT INTO telefonos (numero,tipo,activo,id_paciente) VALUES ($1,$2,$3,$4)', [numero, tipo, activo, id_paciente]);
        res.send(telefono);
    }
    catch (error) {
        next(error);

    }
}

//Actualiza Telefono
let updateTelefono = async (req, res, next) => {
    try {
        const { numero, tipo, activo } = req.body;
        const id = req.params.id;
        const telefono = await db
            .query('UPDATE telefonos SET numero = $1,tipo = $2,activo=$3 WHERE ID = $4 ', [numero, tipo, activo,id]);
        res.send(telefono);
    }
    catch (error) {
        next(error);
    }
}

//Borra Telefono
let deleteTelefono = async (req, res, next) => {
    try {
        const id = req.params.id;
        const telefono  = await db.query('DELETE FROM telefonos where ID = $1', [id]);
        res.send(telefono);

    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    createTelefono: createTelefono,
    updateTelefono: updateTelefono,
    deleteTelefono: deleteTelefono
}