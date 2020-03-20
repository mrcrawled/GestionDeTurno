const createError = require('http-errors');

module.exports = class TurnoSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @description Listar Turnos
     * @return {Array<JSON>}
     */
    fetchAll = async () => {
        try {
            const turnos = await this.db.query(`
                SELECT * from vturnos`);
            return turnos.rows;
        } catch (error) {
            throw error;
        }
    }


    // en esta consulta agregar en el where condicion para traer aquellos turnos con estados asignado
    /**
     * @param {Number} id_profesional
     * @return {Array<JSON>}
     */
    asignadoAProfesional = async (id_profesional) => {
        try{
            const turnos = await this.db.query(
                `SELECT it.fecha_hora_turno, t.duracion
                    FROM turnos t
                    LEFT JOIN informacion_turnos it ON it.id_turno = t.id
                    LEFT JOIN estados e ON e.id = it.id_estado
                    WHERE t.id_profesional = $1 and e.descripcion = "ASIGNADO"`,[
                id_profesional
            ]);
            return turnos.rows;
        } catch(error){
            throw error;
        }
        
    }

    /**
     * @param {Number} id_paciente
     * @param {Number} id_profesional
     * @param {String} practica
     * @param {String} duracion HH:mm
     */
    create = async (id_paciente, id_profesional, practica, duracion) => {
        try {
            const turno = await this.db.query(`
                INSERT INTO turnos (id_paciente, id_profesional, practica, duracion)
                VALUES ($1,$2,$3,$4)
                RETURNING id`, [
                id_paciente, id_profesional, practica, duracion
            ]);
            return turno;
        } catch(error) {
            throw error;
        }
    }

    /**
     * @param {Number} id_turno
     * @param {String} fecha_hora_turno
     */
    asignar = async (id_turno, fecha_hora_turno) => {
        try {
            const turno = await this.db.query(`
                INSERT INTO informacion_turnos (id_turno, id_estado, fecha_hora_turno)
                VALUES ($1,$2,$3)
                RETURNING *`,[
                id_turno, 1, fecha_hora_turno
            ]);
            return turno;
        } catch(error) {
            throw error;
        }
    }
}