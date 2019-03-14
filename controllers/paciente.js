const db = require('../database/config');

//Listar Pacientes
let getPacientes = async (req, res, next) => {
  try {
    const pacientes = await db.query('SELECT nombre,apellido,direccion,fecha_nacimiento FROM pacientes ORDER BY apellido ASC LIMIT 10');
    res.send(pacientes.rows);
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
    const { nombre, apellido, direccion, documento, id_usuario } = req.body;

    const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,direccion,documento,,id_usuario,fecha_nacimento) VALUES ($1,$2,$3,$4,$5,$6)', [nombre, apellido, direccion, documento, id_usuario]);
    res.send(paciente);
  }
  catch (error) {
    next(error);

  };
};

//Actualiza Paciente
let updatePaciente = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { nombre, apellido, direccion, documento, id_usuario } = req.body;
    const paciente = await db
      .query('UPDATE pacientes set nombre = $1,apellido = $2,direccion = $3,documento= $4,id_usuario=$5,fecha_nacimiento = $6 WHERE id = $7', [nombre, apellido, direccion, documento, id_usuario, fecha_nacimiento,id]);
    res.send(paciente);
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
    res.send(paciente);
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