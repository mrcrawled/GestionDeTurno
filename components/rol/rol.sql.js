const createError = require('http-errors');

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
            console.log(error);
            createError(400,"No se pudo listar los roles");
        }
    }

    /**
     * @param {String} rol_tipo
     * @param {Text} descripcion
     * @return {Boolean}
     */
    insert = async (rol_tipo, descripcion="") => {
        try {
            const newRol = await this.db.query(`
                INSERT INTO roles 
                    (rol_tipo,descripcion)
                VALUES ($1,$2)`,
                [rol_tipo, descripcion]
            );
            return newRol.rowCount == 1;
        } catch(error){
            createError(400, "No se pudo crear el rol");
            return false;
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
            const rol = await this.db.query('UPDATE roles SET rol_tipo = $1,descripcion = $2 WHERE ID = $3 ', [rol_tipo, descripcion, id]);
            return rol.rowCount == 1;
        } catch(error) {
            createError(400, "No se pudo actualizar el rol");
            return false;
        }
    }

    /**
     * @param {Number} id
     * @return {Boolean}
     */
    delete = async (id) => {
        try {
            const removedRol = await this.db.query('DELETE FROM roles where ID = $1', [id]);
            return removedRol.rowCount == 1;
        } catch(error) {
            createError(400, "No se pudo eliminar el rol");
            return false;
        }
    }
}