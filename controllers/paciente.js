const db = require('../database/config');

//Listar Pacientes
let getPacientes = async (req, res, next) => {
  try {
    let limit = 1000;
    if (req.query['limit']) {
      limit = req.query['limit'];
    }
    const pacientes = await db.query('SELECT p.nombre,p.apellido,p.direccion,t.numero FROM pacientes p JOIN telefonos t on p.Id = t.id_paciente ORDER BY apellido ASC LIMIT $1', [limit]);
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
    const { nombre, apellido, direccion, documento, fecha_nacimiento, id_usuario } = req.body;
    const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,direccion,documento,id_usuario,fecha_nacimento) VALUES ($1,$2,$3,$4,$5,$6)', [nombre, apellido, direccion, documento, fecha_nacimiento, id_usuario]);
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
    const { nombre, apellido, direccion, documento } = req.body;
    const paciente = await db
      .query('UPDATE pacientes set nombre = $1,apellido = $2,direccion = $3,documento= $4,fecha_nacimiento = $5 WHERE id = $6', [nombre, apellido, direccion, documento, fecha_nacimiento, id]);
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