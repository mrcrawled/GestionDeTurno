const db = require('../database/config');


//Agregar Rol
let createRol = async (req, res, next) => {
    try {
        const { rol_tipo, descripcion } = req.body;
        const rol = await db.query('INSERT INTO roles (rol_tipo,descripcion) VALUES ($1,$2)', [rol_tipo, descripcion]);
        res.send(rol);
    }
    catch (error) {
        next(error);

    }
}

//Actualiza Rol
let updateRol = async (req, res, next) => {
    try {
        const { rol_tipo, descripcion } = req.body;
        const id = req.params.id;
        const rol = await db
            .query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ', [rol_tipo, descripcion,id]);
        res.send(rol);
    }
    catch (error) {
        next(error);
    }
}

//Borra Rol
let deleteRol = async (req, res, next) => {
    try {
        const id = req.params.id;
        const rol = await db.query('DELETE FROM roles where ID = $1', [id]);
        res.send(rol);

    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    createRol: createRol,
    updateRol: updateRol,
    deleteRol: deleteRol
}