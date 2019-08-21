const db = require('../database/config');
const controller = {};

//Listar Rol
controller.getRoles = async (req, res, next) => {
    try {
        const roles = await db.query('SELECT * FROM roles');
        res.send(roles.rows);
    } catch (error) {
        next(error);
    }
}

//Agregar Rol
controller.createRol = async (req, res, next) => {
    try {
        const { rol_tipo, descripcion } = req.body;
        const rol = await db.query('INSERT INTO roles (rol_tipo,descripcion) VALUES ($1,$2)', [rol_tipo, descripcion]);
        res.send(rol);
    } catch (error) {
        next(error);
    }
}

//Actualiza Rol
controller.updateRol = async (req, res, next) => {
    try {
        const { rol_tipo, descripcion } = req.body;
        const id = req.params.id;
        const rol = await db.query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ', [rol_tipo, descripcion,id]);
        res.send(rol);
    } catch (error) {
        next(error);
    }
}

//Borra Rol
controller.deleteRol = async (req, res, next) => {
    try {
        const id = req.params.id;
        const rol = await db.query('DELETE FROM roles where ID = $1', [id]);
        res.send(rol);
    } catch (error) {
        next(error);
    }
}

module.exports = controller;