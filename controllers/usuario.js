const db = require('../database/config');
const bcrypt = require('bcrypt');
const controller = {};

//Listar Usuarios
controller.getUsuarios = async (req, res, next) => {
    try {
        let limit = req.body['limit'] || 1000;
        let offset = req.body['offset'] || 0;
        const usuarios = await db.query('SELECT * FROM usuarios LIMIT $1 OFFSET $2', [limit, offset]);
        res.send(usuarios.rows);
    } catch (error) {
        next(error);
    }
}

//Agrega usuario
controller.createUsuario = async (req, res, next) => {
    try {
        const { username, email, id_rol } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        const usuario = await db.query('INSERT INTO usuarios (username,password,email,id_rol) VALUES ($1,$2,$3,$4)', [username, password, email, id_rol]);
        res.send(usuario);
    } catch (error) {
        next(error);
    }
}

//Actualiza usuario
controller.updateUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { username, email, id_rol } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        const usuario = await db.query('UPDATE usuarios SET username = $1,password = $2,email = $3,id_rol = $4 WHERE id = $5', [username, password, email, id_rol, id]);
        res.send(usuario);
    } catch (error) {
        next(error);
    }
}

//Borra Usuario
controller.deleteUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const usuario = await db.query('DELETE FROM USUARIOS WHERE id = $1', [id]);
        res.send(usuario);
    } catch (error) {
        next(error);
    }
}

module.exports = controller;