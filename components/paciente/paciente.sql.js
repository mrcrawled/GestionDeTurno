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
            const paciente = await this.db.query('SELECT p.nombre,p.apellido,p.fecha_nacimiento,p.telefono,p.direccion,p.documento,os.Descripcion,osp.numero_afiliado as "Numero afiliado" FROM pacientes p JOIN obras_sociales_pacientes osp ON p.id = osp.id_paciente JOIN obras_sociales os ON os.Id = osp.id_obra_social WHERE p.id = $1', [id]);
            if (paciente.rowCount === 0)
                return createError(404, 'No se encontró el paciente ');
            else
                return paciente.rows[0];

        } catch (error) {
            console.log(error.stack)
            return error.stack;
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
    insert = async (nombre, apellido, fecha_nacimiento, documento, telefono, direccion, id_usuario) => {
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

    update = async (nombre,apellido,telefono,fecha_nacimiento,direccion,documento,id) => {
        try {
            const paciente = await this.db.query('UPDATE pacientes set nombre = $1,apellido = $2, direccion = $3, documento = $4,fecha_nacimiento = $5, telefono = $6 WHERE id = $7',
                n[nombre,
                apellido,
                direccion,
                documento,
                fecha_nacimiento,
                telefono,
                id]);
                console.log(paciente);
                return paciente;
                
        } catch (error) {
            
        }
    }

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
    insertObraSocialPaciente = async (id_obra_social, id_paciente, numero_afiliado) => {
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

    updateObraSocialPaciente = async (numero_afiliado,id) =>{
        try {
            const obraSocialPaciente = await this.db.query('UPDATE obras_sociales_pacientes SET numero_afiliado = $1 WHERE ID = $2 ', [numero_afiliado, id]);
            return obraSocialPaciente.rowCount == 1;

        } catch (error) {
            
        }
    }
}