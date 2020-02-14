module.exports = class ObraSocialSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @description Listar Obras Sociales
     * @returns {Array<JSON>}
     */
    fetchAll = async () => {
        try {
            const obras_sociales = await this.db.query('SELECT * FROM obras_sociale ORDER BY nombre ASC');
            return obras_sociales.rows;
        } catch (error) {
            throw error;
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
                throw createError(404, 'No se encontró la obra social ');
            else
                return obra_social.rows[0];
        } catch (error) {
            throw error;
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
            await this.db.query('BEGIN');
            const newObraSocial = await this.db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
            await this.db.query('COMMIT');
            return newObraSocial.rowCount == 1;
        } catch (error) {
            await this.db.query('ROLLBACK');
            throw error;
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
            await this.db.query('BEGIN');
            const obraSocial = await this.db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
            await this.db.query('COMMIT');
            return obraSocial.rowCount == 1;
        } catch (error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }

    /**
     * @description Eliminar Obra Social
     * @param {Number} id
     * @returns {Boolean}
     */
    delete = async (id) => {
        try {
            await this.db.query('BEGIN');
            const removed = await this.db.query('DELETE FROM obras_sociales where ID = $1', [id]);
            await this.db.query('COMMIT');
            return removed.rowCount == 1;
        } catch (error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
}