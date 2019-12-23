const createError = require('http-errors');

module.exports = class PacienteSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @description Listar Pacientes
     * @param {Number} limit
     * @param {Number} offset
     * @returns {Array<JSON>}
     */
    fetchAll = async (limit, offset) => {
        try {
            const paciente = await this.db.query("SELECT id, nombre, apellido, documento, telefono FROM pacientes ORDER BY apellido ASC LIMIT $1 OFFSET $2", [limit, offset]);
            return paciente.rows;
        } catch (error) {
            return createError(404, 'No se pudo listar');
        }
    }

    /**
     * @description Listar Paciente por id
     * @param {Number} id
     * @returns {JSON}
     */
    fetchById = async (id) => {
        try {
            const {rows: [paciente]} = await this.db.query('SELECT * FROM pacientes WHERE id = $1',[id]);
            const {rows: [usuario]} = await this.db.query('SELECT * FROM usuarios WHERE id = $1', [paciente.id_usuario]);
            const {rows: [obraSocialPaciente]} = await this.db.query('SELECT * FROM obras_sociales_pacientes WHERE id_paciente = $1 AND activo = TRUE',[id]);
            const {rows: [obraSocial]} = await this.db.query('SELECT * FROM obras_sociales WHERE id = $1',[obraSocialPaciente.id_obra_social]);
            return {
                id_paciente: paciente.id,
                nombre: paciente.nombre,
                apellido: paciente.apellido,
                email: usuario.email,
                fecha_nacimiento: paciente.fecha_nacimiento,
                documento: paciente.documento,
                direccion: paciente.direccion,
                id_usuario: paciente.id_usuario,
                numero_afiliado: obraSocialPaciente.numero_afiliado,
                id_obra_social: obraSocial.id,
                obra_social:  obraSocial.nombre,
                username: usuario.username
            };
        } catch (error) {
            return createError(400, 'Ocurrió un problema');
        }
    }

    /**
     * @description Listar Paciente por id
     * @param {String} username
     * @param {String} password
     * @param {String} nombre
     * @param {String} apellido
     * @param {Date} fecha_nacimiento
     * @param {JSON} documento
     * @param {String} email
     * @param {String} telefono
     * @param {JSON} direccion
     * @param {Number} id_obra_social
     * @param {String} numero_afiliado
     * @returns {Number}
     */
    create = async (username, password, nombre, apellido, fecha_nacimiento, documento, email, telefono, direccion, id_obra_social, numero_afiliado) => {
        try{
            const usuario = await this.db.query('INSERT INTO usuarios (username, password, email, id_rol) VALUES ($1,$2,$3,$4) RETURNING *', [username, password, email, 3]);
            const id_usuario = usuario.rows[0].id;

            const paciente = await this.db.query('INSERT INTO pacientes (nombre,apellido,fecha_nacimiento,direccion,documento,id_usuario) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [nombre, apellido, fecha_nacimiento, direccion, documento, id_usuario, telefono]);
            const id_paciente = paciente.rows[0].id;
            
            const obra_social_paciente = await this.db.query('INSERT INTO obras_sociales_pacientes (id_obra_social, id_paciente, numero_afiliado, activo) VALUES ($1,$2,$3,$4) RETURNING *', [id_obra_social, id_paciente, numero_afiliado, true]);
            return id_paciente;
        } catch (error) {
            console.log(error);
            return createError(400, 'Ocurrió un problema');
        }
    }
    update = async () => {}

    /**
     * @description Eliminar Paciente
     * @param {Number} id
     * @returns {Boolean}
     */
    delete = async (id) => {
        try{
            const removedPaciente = await this.db.query('DELETE FROM pacientes where ID = $1', [id]);
            return removedPaciente;
        } catch(error){
            console.log(error);
            return createError(400, 'Ocurrió un problema');
        }
    }
}