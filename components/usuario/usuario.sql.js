const createError = require('http-errors');

module.exports = class UsuarioSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @param {Number} limit
     * @param {Number} offset
     * @returns {Array<JSON>}
     */
    fetchAllUsuarios = async (limit, offset) => {
        try {
            const usuarios = await this.db.query('SELECT * FROM usuarios LIMIT $1 OFFSET $2', [limit, offset]);
            return usuarios.rows;
        } catch (error) {
            return createError(400, 'No se pudo listar');
        }
    }

    /**
     * @param {Text} username
     * @param {Text} password
     * @param {Text} email
     * @param {Number} id_rol
     * @returns {Boolean}
     */
    insertUsuario = async (username, password, email, id_rol) => {
        try {
            const newUsuario = await this.db.query('INSERT INTO usuarios (username,password,email,id_rol) VALUES ($1,$2,$3,$4)', [username, password, email, id_rol]);
            console.log(newUsuario);
            return newUsuario;
        } catch (error) {
            return createError(400, 'No se pudo crear el registro');
        }
    }

    /**
     * @param {Text} username
     * @param {Text} password
     * @param {Number} id_rol
     * @param {Number} id
     * @returns {Boolean}
     */
    updateUsuarios = async (username, password, email, id_rol, id) => {
        try {
            const usuario = await this.db.query('UPDATE usuarios SET username = $1,password = $2,email = $3,id_rol = $4 WHERE id = $5', [username, password, email, id_rol, id]);
            return usuario;
        } catch (error) {
            return createError(400, 'No se pudo actualizar el registro');
        }
    }

    /**
     * @param {Number} id
     * @returns {Boolean}
     */
    deleteUsuarios = async (id) => {
        try {
            const removeUsuario = await this.db.query('DELETE FROM USUARIOS WHERE id = $1', [id]);
            return removeUsuario;
        } catch (error) {
            return createError(400, 'No se pudo borrar el registro');
        }
    }
}