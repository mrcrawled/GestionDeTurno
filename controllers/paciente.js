const db = require('../database/config');
const bcrypt = require('bcrypt');
const { capitalize } = require('../utils/tools')

//Listar Pacientes
let getPacientes = async (req, res, next) => {
    try {
        let limit = 1000;
        if (req.query['limit']) {
            limit = req.query['limit'];
        }
        const pacientes = await db.query("SELECT nombre,apellido,documento,telefono FROM pacientes ORDER BY apellido ASC LIMIT $1", [limit]);
        res.json(pacientes.rows);
    } catch (error) {
        return next(error);
    }
}

//Lista Paciente por id
let getPacienteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const paciente = await db.query('SELECT * FROM pacientes WHERE ID = $1',[id]);
        const usuario = await db.query('SELECT * FROM usuarios WHERE ID = $1', [paciente.rows[0].id_usuario]);
        const obraSocialPaciente = await db.query('SELECT * FROM obras_sociales_pacientes WHERE ID = $1 AND activo = true',[id]);
        const obraSocial = await db.query('SELECT * FROM obras_sociales WHERE ID = $1',[obraSocialPaciente.rows[0].id_obra_social]);
        res.json({
            id_paciente: paciente.rows[0].id,
            nombre: paciente.rows[0].nombre,
            apellido: paciente.rows[0].apellido,
            email: usuario.rows[0].email,
            fecha_nacimiento: paciente.rows[0].fecha_nacimiento,
            documento: paciente.rows[0].documento,
            direccion: paciente.rows[0].direccion,
            id_usuario: paciente.rows[0].id_usuario,
            numero_afiliado: obraSocialPaciente.rows[0].numero_afiliado,
            id_obra_social: obraSocial.rows[0].id,
            obra_social:  obraSocial.rows[0].nombre,
            username: usuario.rows[0].username
        });
    } catch (error) {
        next(error);
    }
}

//Agregar Paciente
let createPaciente = async (req, res, next) => {
    try {
        const { fecha_nacimiento, telefono, direccion, documento, doc_numero, email, id_obra_social, numero_afiliado } = req.body;
        const nombre   = capitalize(req.body.nombre);
        const apellido = capitalize(req.body.apellido);
        const username = `${apellido.toLowerCase()}_${nombre.toLowerCase()}`;
        const password = await bcrypt.hashSync(doc_numero, 10);

        const usuario = await db.query('INSERT INTO usuarios (username, password, email, id_rol) VALUES ($1,$2,$3,$4) RETURNING *', [username, password, email, 3]);
        const id_usuario = usuario.rows[0].id;

        const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,fecha_nacimiento,direccion,documento,id_usuario) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [nombre, apellido, fecha_nacimiento, direccion, documento, id_usuario,telefono]);
        const id_paciente = paciente.rows[0].id;

        const obra_social_paciente = await db.query('INSERT INTO obras_sociales_pacientes (id_obra_social, id_paciente, numero_afiliado, activo) VALUES ($1,$2,$3,$4) RETURNING *', [id_obra_social, id_paciente, numero_afiliado, true]);
        const obra_social = obra_social_paciente.rows[0].nombre;

        console.log("data : ", { // Este dato podría borrarse o utilizarse para renderizar PacienteInfo después de agregar el paciente
            apellido,
            direccion,
            documento,
            email,
            fecha_nacimiento,
            telefono,
            id_obra_social,
            id_paciente,
            id_usuario,
            nombre,
            numero_afiliado,
            obra_social,
            username,
            
        });

        res.json({
            "status": "OK",
            "id_paciente": id_paciente
        });
    } catch (error) {
        next(error);
    };
};

//Actualizar Paciente
let updatePaciente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { nombre, apellido, telefono,fecha_nacimiento, direccion, documento } = req.body;
        const paciente = await db.query('UPDATE pacientes set nombre = $1,apellido = $2,direccion = $3,documento= $4, fecha_nacimiento = $5,telefono = $6 WHERE id = $7', [nombre, apellido, direccion, documento, fecha_nacimiento,telefono, id]);
        console.log(paciente);
    } catch (error) {
        next(error);
    }
};

//Borrar Paciente
let deletePaciente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const paciente = await db.query('DELETE FROM pacientes where ID = $1', [id]);
        res.json({
            "status": "OK",
            "message": "Se ha eliminado el paciente"

        });
        res.send (paciente);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getPacientes: getPacientes,
    getPacienteById: getPacienteById,
    createPaciente: createPaciente,
    updatePaciente: updatePaciente,
    deletePaciente: deletePaciente,
}