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
            const paciente = await this.db.query("SELECT nombre, apellido, documento, telefono FROM pacientes ORDER BY apellido ASC LIMIT $1 OFFSET $2", [limit, offset]);
            return paciente.rows;
        } catch (error) {
            return createError(404, error, 'No se pudo listar');
        }
    }

    /**
     * @description Listar Paciente por id
     * @param {Number} id
     * @returns {JSON}
     */
    fetchById = async (id) => {
        try {
            const { rows: [paciente] } = await this.db.query('SELECT * FROM pacientes WHERE id = $1', [id]);
            const { rows: [usuario] } = await this.db.query('SELECT * FROM usuarios WHERE id = $1', [paciente.id_usuario]);
            const { rows: [obraSocialPaciente] } = await this.db.query('SELECT * FROM obras_sociales_pacientes WHERE id_paciente = $1 AND activo = TRUE', [id]);
            const { rows: [obraSocial] } = await this.db.query('SELECT * FROM obras_sociales WHERE id = $1', [obraSocialPaciente.id_obra_social]);
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
                obra_social: obraSocial.nombre,
                username: usuario.username
            };
        } catch (error) {
            return createError(400, 'Ocurrió un problema');
        }
    }

    /**
     * @description Crear Pacientes
     * @param {String} nombre
     * @param {String} apellido
     * @param {Date} fecha_nacimiento
     * @param {JSON} documento
     * @param {String} telefono
     * @param {JSON} direccion
     * @param {Number} id_usuario
     * @returns {Number}
     */
    create = async (nombre, apellido, fecha_nacimiento, documento, telefono, direccion, id_usuario) => {
        try {
            const newPaciente = await this.db.query(`
                INSERT INTO pacientes 
                    (nombre, apellido, fecha_nacimiento, documento, telefono, direccion, id_usuario) 
                VALUES 
                    ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *`, 
                [nombre, apellido, fecha_nacimiento, documento, telefono, direccion, id_usuario]
            );
            const id_paciente = newPaciente.rows[0].id;
            return id_paciente;
        } catch (error) {
            return createError(404, error, 'No se pudo crear el registro');
        }
    }

    update = async () => { }

    /**
     * @description Eliminar Paciente
     * @param {Number} id
     * @returns {Boolean}
     */
    delete = async (id) => {
        try {
            const removedPaciente = await this.db.query('DELETE FROM pacientes where ID = $1', [id]);
            return removedPaciente.rowCount > 0;
        } catch (error) {
            console.log(error);
            return createError(400, 'Ocurrió un problema');
        }
    }

    /**
     * @description Crea la asociación entre la Obra Social y el Paciente
     * @param {Number} id_obra_social
     * @param {Number} id_paciente,
     * @param {String} numero_afiliado
     * @returns {Boolean}
     */
    createObraSocialPaciente = async (id_obra_social, id_paciente, numero_afiliado) => {
        try {
            const newObraSocialPaciente = await this.db.query(`
                INSERT INTO obras_sociales_pacientes 
                    (id_obra_social, id_paciente, numero_afiliado, activo)
                VALUES 
                    ($1, $2, $3, $4)
                RETURNING *`,
                [id_obra_social, id_paciente, numero_afiliado, true]
            );
            return newObraSocialPaciente.rowCount > 0;
        } catch (error) {
            return createError(404, error, 'No se pudo crear el registro');
        }
    }
}