const createError = require('http-errors');

module.exports = class TurnoSql {
    constructor(db) {
        this.db = db;
    }

    /**
     * @param {Number} id_profesional
     */
    asignadoAProfesional = async (id_profesional) => {
        try{
            const turnos = await this.db.query(
                `SELECT et.fecha_hora_turno, t.duracion
                    FROM turnos t
                    LEFT JOIN estados_turnos et ON et.id_turno = t.id
                    WHERE t.id_profesional = $1`,[
                id_profesional
            ]);
            return turnos.rows;
        } catch(error){
            createError(400,"No se pudo listar los turnos");
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
            const turno = await this.db.query('INSERT INTO turnos (id_paciente, id_profesional, practica, duracion) VALUES ($1,$2,$3,$4) RETURNING id',[
                id_paciente, id_profesional, practica, duracion
            ]);
            return turno;
        } catch(error) {
            createError(400, "No se pudo crear el turno")
        }
    }

    /**
     * @param {Number} id_turno
     * @param {String} fecha_hora_turno
     */
    asignar = async (id_turno, fecha_hora_turno) => {
        try {
            const turno = await this.db.query('INSERT INTO estados_turnos (id_turno, id_estado, fecha_hora_turno) VALUES ($1,$2,$3)',[
                id_turno, 1, fecha_hora_turno
            ]);
            return turno;
        } catch(error) {
            createError(400, "No se pudo asignar el turno")
        }
    }
}