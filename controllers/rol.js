const db = require('../database/config');

class RolController {
    //Listar Rol
    getRoles = async (req, res, next) => {
        try {
            const roles = await db.query('SELECT * FROM roles');
            if(!roles)
                throw new Error("No existe roles");
            res.status(200).json(roles);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Agregar Rol
    createRol = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const rol = await db.query('INSERT INTO roles (rol_tipo,descripcion) VALUES ($1,$2) RETURNING id', [rol_tipo, descripcion]);
            if(!rol)
                throw new Error("No se pudo crear el rol")
            res.status(200).json(rol);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Actualiza Rol
    updateRol = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const { id } = req.params;
            const rol = await db.query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ',[rol_tipo, descripcion,id]);
            if(!rol)
                throw new Error("No se pudo actualizar el rol");
            res.status(200).json(rol);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Borra Rol
    deleteRol = async (req, res, next) => {
        try {
            const id = req.params.id;
            const wasDeleted = await db.query('DELETE FROM roles where ID = $1', [id]);
            if(!wasDeleted)
                throw new Error("No se pudo eliminar el rol");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
}

module.exports = new RolController();