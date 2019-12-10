const usuario = require('../database/data/usuario');
const bcrypt = require('bcrypt');
const controller = {};

//Listar Usuarios
controller.getUsuarios = async (req, res, next) => {
    try {
        let limit = req.body['limit'] || 1000;
        let offset = req.body['offset'] || 0;
        const usuarios = await usuario.fetchAllUsuarios(limit, offset);
        res.send(usuarios);
    } catch (error) {
        return next(createError(404, 'No se pudo listar'));
    }
}

//Agrega usuario
controller.createUsuario = async (req, res, next) => {
    try {
        const { username, email, id_rol } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        await usuario.insertUsuario(username, password, email, id_rol);
        res.json({
            status: "OK",
            message: "Se ha agregado un nuevo registro",
            body: {
                usuario: {
                    username, password, email, id_rol
                }
            }
        })
    } catch (error) {
        return next(createError, (400, 'No se puedo crear un nuevo registro'));
    }
}

//Actualiza usuario
controller.updateUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { username, email, id_rol } = req.body;
        const password = bcrypt.hashSync(req.body.password, 10);
        await usuario.updateUsuarios(username, password, email, id_rol, id);
        res.json({
            status: "OK",
            message: "Se ha actualizado el registro",
            body: {
                usuario: {
                    username, password, email, id_rol
                }
            }
        })
    } catch (error) {
        return next(createError, (400, 'No se puedo actualizar el registro'));
    }
}

//Borra Usuario
controller.deleteUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        await usuario.deleteUsuarios(id);
        res.send(`Se elimino el usuario con el ID:  ${id}`);
    } catch (error) {
        return next(createError(400, 'No se pudo borrar el registro'));
    }
}

module.exports = controller;