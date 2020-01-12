const createError = require('http-errors');

module.exports = class ObraSocialSql {
    constructor(db){
        this.db = db;
    }

    /**
     * @description Listar Obras Sociales
     * @returns {Array<JSON>}
     */
    fetchAll = async () => {
        try {
            const obras_sociales = await this.db.query('SELECT * FROM obras_sociales ORDER BY nombre ASC');
            return obras_sociales.rows;
        } catch (error) {
            console.log(error);
            return createError(404, 'No se pudo listar');
        }
    }

    /**
     * @description Listar Obra Social por id
     * @param {Number} id
     * @returns {JSON}
     */
    fetchById = async (id) => {
        try {
            const obra_social = await this.db.query('SELECT * FROM obras_sociales WHERE ID = $1', [id]);
            if (obra_social.rowCount === 0)
                return createError(404, 'No se encontró la obra social ');
            else
                return obra_social.rows[0];
        } catch (error) {
            return createError(400, 'Ocurrió un problema');
        }
    }

    /**
     * @description Crear Obra Social
     * @param {String} nombre
     * @param {String} descripcion
     * @returns {Boolean}
     * @todo returns  {Number} id
     */
    insert = async (nombre, descripcion) => {
        try {
            const newObraSocial = await this.db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
            return newObraSocial.rowCount == 1;
        } catch (error) {
            return createError(400, 'No se pudo crear el registro');
        }
    
    }

    /**
     * @description Actualizar Obra Social
     * @param {String} nombre
     * @param {String} descripcion
     * @param {Number} id
     * @returns {Boolean}
     */
    update = async (nombre, descripcion, id) => {
        try {
            const obraSocial = await this.db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
            return obraSocial.rowCount == 1;
        } catch (error) {
            return createError(400, 'No se pudo actualizar el registro');
        }
    }

    /**
     * @description Eliminar Obra Social
     * @param {Number} id
     * @returns {Boolean}
     */
    delete = async (id) => {
        try {
            const removed = await this.db.query('DELETE FROM obras_sociales where ID = $1', [id]);
            return removed == 1;
        } catch (error) {
            return createError(400, 'No se pudo borrar el registro');
        }
    }
}

