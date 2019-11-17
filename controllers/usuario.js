const db = require('../database/config');
const bcrypt = require('bcrypt');

class UsuarioController{
    //Listar Usuarios
    getUsuarios = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const usuarios = await db.query('SELECT * FROM usuarios LIMIT $1 OFFSET $2', [limit, offset]);
            if(!usuarios)
                throw new Error("No se encontraron Usuarios")
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Agrega usuario
    createUsuario = async (req, res, next) => {
        try {
            const { username, email, id_rol } = req.body;
            const password = bcrypt.hashSync(req.body.password, 10);
            const usuario = await db.query(
                'INSERT INTO usuarios (username,password,email,id_rol) VALUES ($1,$2,$3,$4) RETURNING id',
                [username, password, email, id_rol]
            );
            if(!usuario)
                throw new Error("No pudo crearse el usuario");
            res.status(200).json(usuario);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Actualiza usuario
    updateUsuario = async (req, res, next) => {
        try {
            const id = req.params.id;
            const { username, email, id_rol } = req.body;
            const password = bcrypt.hashSync(req.body.password, 10);
            const wasUpdated = await db.query(
                'UPDATE usuarios SET username = $1, password = $2, email = $3, id_rol = $4 WHERE id = $5',
                [username, password, email, id_rol, id]
            );
            if(!wasUpdated)
                throw new Error("No se pudo actualizar");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Borra Usuario
    deleteUsuario = async (req, res, next) => {
        try {
            const id = req.params.id;
            const wasDeleted = await db.query('DELETE FROM USUARIOS WHERE id = $1', [id]);
            if(!wasDeleted)
                throw new Error("No se pudo eliminar el usuario");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
}

module.exports = new UsuarioController();