const db = require('../database/config');
const bcrypt = require('bcrypt');
const { capitalice } = require('../utils/tools')

//Listar Pacientes
let getPacientes = async (req, res, next) => {
    try {
        let limit = 1000;
        if (req.query['limit']) {
            limit = req.query['limit'];
        }
        const pacientes = await db.query("SELECT nombre, apellido, documento, direccion, fecha_nacimiento FROM pacientes ORDER BY apellido ASC LIMIT $1", [limit]);
        res.json(pacientes.rows);
    }
    catch (error) {
        return next(error);
    }
}
//Lista Paciente por id
let getPacienteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const paciente = await db.query('SELECT * FROM PACIENTES WHERE id = {$1}', [id]);
        res.json(paciente.rows[0]);
    }
    catch (error) {
        next(error);
    }
}

//Agrega Paciente
let createPaciente = async (req, res, next) => {
    try {
        const { nombre, apellido, fecha_nacimiento, direccion, documento, doc_numero, email, id_obra_social, numero_afiliado, os_nombre } = req.body;
        nombre = capitalize(nombre);
        apellido = capitalice(apellido);
        const username = `${apellido.toLowerCase()} ${nombre.toLowerCase()}`;
        const password = await bcrypt.hashSync(doc_numero, 10);
        const usuario = await db.query('INSERT INTO usuarios (username, password, email, id_rol) VALUES ($1,$2,$3,$4)', [username, password, email, 3]);
        const { id_usuario } = usuario.rows[0];
        const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,fecha_nacimiento,direccion,documento,id_usuario) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [nombre, apellido, fecha_nacimiento, direccion, documento, id_usuario]);
        const { id_paciente } = paciente.rows[0];
        const obra_social_paciente = await db.query('INSERT INTO obras_sociales_pacientes (id_obra_social, id_paciente, numero_afiliado, activo) VALUES ($1,$2,$3,$4) RETURNING *', [id_obra_social, id_paciente, numero_afiliado, true]);
        const response = {
                "status": "OK",
                "data": {
                    username,
                    nombre,
                    apellido,
                    fecha_nacimiento,
                    direccion,
                    documento,
                    email,
                    id_paciente,
                    os_nombre,
                    numero_afiliado
                }
            }
        res.json(response);
    }
    catch (error) {
        next(error);
    };
};

//Actualiza Paciente
let updatePaciente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { nombre, apellido, fecha_nacimiento, direccion, documento } = req.body;
        const paciente = await db.query('UPDATE pacientes set nombre = $1,apellido = $2,direccion = $3,documento= $4,fecha_nacimiento = $5 WHERE id = $6', [nombre, apellido, direccion, documento, fecha_nacimiento, id]);
        res.json(paciente.rows[0]);
    }
    catch (error) {
        next(error);
    }
};

//Borra Paciente
let deletePaciente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const paciente = await db.query('DELETE FROM pacientes where ID = $1', [id]);
        res.json({
            "status": "TODO"
        });
    }
    catch (error) {
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