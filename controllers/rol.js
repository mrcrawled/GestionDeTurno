const db = require('../database/config');

class RolController {
    //Listar Rol
    getRoles = async (req, res, next) => {
        try {
            const roles = await db.query('SELECT * FROM roles');
            res.status(200).json(roles);
        } catch (error) {
            console.log(error);
            res.status(400);
        }
    }
    
    //Agregar Rol
    createRol = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const rol = await db.query('INSERT INTO roles (rol_tipo,descripcion) VALUES ($1,$2) RETURNING id', [rol_tipo, descripcion]);
            if(rol)
                res.status(200).json(rol);
            else 
                res.status(400).json("No se pudo crear el rol");
        } catch (error) {
            console.log(error);
            res.status(400).json("No se pudo crear el rol");
        }
    }
    
    //Actualiza Rol
    updateRol = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const { id } = req.params;
            const rows_updated = await db.query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ',[rol_tipo, descripcion,id]);
            if( rows_updated ) {
                res.status(200).json("Actualización exitosa");
            } else {
                res.status(400).json("No se pudo actualizar");
            }
        } catch (error) {
            console.log(error);
            res.status(400).json("No se pudo actualizar");
        }
    }
    
    //Borra Rol
    deleteRol = async (req, res, next) => {
        try {
            const id = req.params.id;
            const rows_deleted = await db.query('DELETE FROM roles where ID = $1', [id]);
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

module.exports = new RolController();