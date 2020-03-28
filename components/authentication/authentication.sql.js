const createError = require('http-errors');

module.exports = class AuthenticationSql {
    constructor(db){
        this.db = db;
    }

    /**
     * @param {String} username
     * @returns {JSON}
     */
    getUsuarioByUsername = async (username) => {
        try{
            const {rows: [usuario]} = await this.db.query('select * from usuarios where username = $1', [username]);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    /**
     * @param {String} email
     * @returns {JSON}
     */
    getUsuarioByEmail = async (email) => {
        try{
            const {rows: [usuario]} = await this.db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    /**
     * @param {Number} id_rol
     * @returns {JSON}
     */
    getRolUsuario = async (id_rol) => {
        try{
            const {rows: [rol]} = await this.db.query('select rol_tipo from roles where id = $1', [id_rol]);
            return rol;
        } catch(error){
            throw error;
        }
    }

    /**
     * @param {Number} id
     * @param {String} password
     * @returns {Boolean}
     */
    changePassword = async (id, password) => {
        try{
            const updated = await this.db.query('UPDATE usuarios set password = $1 WHERE id = $2 ', [password, id]);
            return updated.rowCount == 1;
        } catch(error){
            throw error;
        }
    }
}