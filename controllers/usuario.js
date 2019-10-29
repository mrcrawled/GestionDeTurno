const db = require('../database/config');
const bcrypt = require('bcrypt');

class UsuarioController{
    //Listar Usuarios
    getUsuarios = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const usuarios = await db.query('SELECT * FROM usuarios LIMIT $1 OFFSET $2', [limit, offset]);
            res.status(200).json(usuarios);
        } catch (error) {
            console.log(error);
            res.status(400);
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
            res.status(200).json(usuario);
        } catch (error) {
            console.log(error);
            res.status(400);
        }
    }
    
    //Actualiza usuario
    updateUsuario = async (req, res, next) => {
        try {
            const id = req.params.id;
            const { username, email, id_rol } = req.body;
            const password = bcrypt.hashSync(req.body.password, 10);
            const rows_updated = await db.query(
                'UPDATE usuarios SET username = $1, password = $2, email = $3, id_rol = $4 WHERE id = $5',
                [username, password, email, id_rol, id]
            );
            if( rows_updated ) {
                res.status(200).json("Actualización exitosa");
            } else {
                res.status(400).json("No se pudo actualizar");
            }
        } catch (error) {
            res.status(400).json("No se pudo actualizar");
        }
    }
    
    //Borra Usuario
    deleteUsuario = async (req, res, next) => {
        try {
            const id = req.params.id;
            const rows_deleted = await db.query('DELETE FROM USUARIOS WHERE id = $1', [id]);
            if( rows_deleted ) {
                res.status(200).json("Eliminación exitosa");
            } else {
                res.status(400).json("No se pudo eliminar");
            }
        } catch (error) {
            console.log(error);
            res.status(400).json("No se pudo eliminar");
        }
    }
}

module.exports = new UsuarioController();