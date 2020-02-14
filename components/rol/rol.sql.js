module.exports = class RolSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @return {Array<JSON>}
     */
    selectAll = async () => {
        try{
            const roles = await this.db.query('SELECT * FROM roles');
            return roles.rows;
        } catch(error){
            throw error;
        }
    }

    /**
     * @param {String} rol_tipo
     * @param {Text} descripcion
     * @return {Boolean}
     */
    insert = async (rol_tipo, descripcion="") => {
        try {
            await this.db.query('BEGIN');
            const newRol = await this.db.query(`
                INSERT INTO roles 
                    (rol_tipo,descripcion)
                VALUES ($1,$2)`,
                [rol_tipo, descripcion]
            );
            await this.db.query('COMMIT');
            return newRol.rowCount == 1;
        } catch(error){
            await this.db.query('ROLLBACK');
            throw error;
        }
    }

    /**
     * @param {Number} id
     * @param {String} rol_tipo
     * @param {Text} descripcion
     * @return {Boolean}
     */
    update = async (id, rol_tipo, descripcion="") => {
        try {
            await this.db.query('BEGIN');
            const rol = await this.db.query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ', [rol_tipo, descripcion, id]);
            await this.db.query('COMMIT');
            return rol.rowCount == 1;
        } catch(error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }

    /**
     * @param {Number} id
     * @return {Boolean}
     */
    delete = async (id) => {
        try {
            await this.db.query('BEGIN');
            const removedRol = await this.db.query('DELETE FROM roles where ID = $1', [id]);
            await this.db.query('COMMIT');
            return removedRol.rowCount == 1;
        } catch(error) {
            await this.db.query('ROLLBACK');
            throw error;
        }
    }
}