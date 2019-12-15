const db = require('../database/config');
const createError = require('http-errors')
const moment = require('moment');
const controller = {};

controller.getTrunos = (req, res, next) => {
    try {

    } catch(error){
        console.log(error);
        return next(createError(404, 'No se pudo listar los turnos'));
    }
}

controller.asignarTurno = async (req, res, next) => {
    try {
        const {
            id_paciente,
            id_profesional,
            practica
        } = req.body;
        const mduracion = moment(req.body.duracion,"HH:mm");
        if( !mduracion.isValid() ){
            throw ("formato de duracion inválido");
        }
        
        const mfecha_hora_turno = moment(req.body.fecha_hora_turno,"YYYY-MM-DD HH:mm");
        const mfecha_hora_turno_end = moment( mfecha_hora_turno + moment.duration(req.body.duracion,"HH:mm") );
        if( !mfecha_hora_turno.isValid() ){
            throw ("formato de fecha/hora del turno es inválido");
        }
        // en esta consulta agregar en el where condicion para traer aquellos turnos con estados asignado
        const turnos_asignados_profesional = await db.query(
            `SELECT et.fecha_hora_turno, t.duracion
                FROM turnos t
                LEFT JOIN estados_turnos et ON et.id_turno = t.id
                WHERE t.id_profesional = $1`,[
            id_profesional
        ]);
        if (turnos_asignados_profesional.rowCount > 0) {
            for (let i = 0; i < turnos_asignados_profesional.rows.length; i++) {
                const {
                    fecha_hora_turno,
                    duracion
                } = turnos_asignados_profesional.rows[i];
                const mfht_assigned = moment(fecha_hora_turno);
                const mfht_assigned_end = moment( mfht_assigned + moment.duration(duracion,"HH:mm"));
                if ( mfecha_hora_turno >= mfht_assigned && mfecha_hora_turno < mfht_assigned_end         // valida si turno nuevo comienza entre turno asignado
                ||   mfecha_hora_turno_end > mfht_assigned && mfecha_hora_turno_end <= mfht_assigned_end // valida si turno nuevo finaliza entre turno asignado
                ||   mfht_assigned > mfecha_hora_turno && mfht_assigned < mfecha_hora_turno_end ) {      // valida si turno asignado no está contenido entre nuevo turno
                    throw ("El profesional tiene ya un turno asignado a esta hora o en el intervalo dado");
                }
            }
        }

        const duracion = mduracion.format("HH:mm");
        const fecha_hora_turno = mfecha_hora_turno.format("YYYY-MM-DD HH:mm:ss");
        const turno = await db.query('INSERT INTO turnos (id_paciente, id_profesional, practica, duracion) VALUES ($1,$2,$3,$4) RETURNING id',[
            id_paciente, id_profesional, practica, duracion
        ]);
        if( turno.rowCount == 0 ){
            throw ("No se pudo crear el turno");
        }
        const id_turno = turno.rows[0].id;
        const estado_turno = await db.query('INSERT INTO estados_turnos (id_turno, id_estado, fecha_hora_turno) VALUES ($1,$2,$3)',[
            id_turno, 1, fecha_hora_turno
        ]);
        if(estado_turno.rowCount == 0){
            throw ("No se pudo asignar el turno");
        }
        res.json("Turno Asignado");
    } catch(error){
        console.log(error);
        return next(createError(404, error));
    }
}

module.exports = controller;