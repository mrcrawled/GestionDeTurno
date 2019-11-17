const db = require('../database/config');

class ObraSocialController {
    //Listar Obras Sociales
    getObrasSociales = async (req, res, next) => {
        try {
            const obrasSociales = await db.query('SELECT * FROM obras_sociales ORDER BY nombre ASC');
            if(!obrasSociales)
                throw new Error("No existe obras sociales");
            res.status(200).json(obrasSociales);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Lista Obra Social por id
    getObraSocialById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const obraSocial = await db.query('SELECT * FROM obras_sociales WHERE ID = $1 LIMIT 1', [id]);
            if(!obraSocial)
                throw new Error("Obra social inexistente");
            res.status(200).json(obraSocial);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Agregar Obra Social
    createObraSocial = async (req, res, next) => {
        try {
            const { nombre, descripcion } = req.body;
            if (nombre === "")
                throw new Error('Ingrese los datos requeridos');
            const obraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
            if(!obraSocial)
                throw new Error("No pudo crearse la obra social");
            res.status(200).json(obraSocial);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Actualizar Obra Social
    updateObraSocial = async (req, res, next) => {
        try {
            const { nombre, descripcion } = req.body;
            const id = req.params.id;
            const wasObraSocialUpdated = await db.query(
                'UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ',
                [nombre, descripcion, id]
            );
            if(!wasObraSocialUpdated)
                throw new Error("No se pudo actualizar la obra social");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Borrar Obra Social
    deleteObraSocial = async (req, res, next) => {
        try {
            const id = req.params.id;
            const wasDeleted = await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
            if(!wasDeleted)
                throw new Error("No se pudo eliminar la obra social");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
}

module.exports = new ObraSocialController();