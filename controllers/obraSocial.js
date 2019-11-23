const db = require('../database/config');
const createError = require('http-errors')

//Listar Obras Sociales
const getObrasSociales = async (req, res, next) => {
  try {
    const obras_sociales = await db.query('SELECT nombre, descripcion FROM obras_sociale ORDER BY nombre ASC');
    res.json(obras_sociales.rows);
  } catch (error) {
    return next(createError(404, 'No se pudo listar'));
  }
}

//Lista Obra Social por id
const getObraSocialById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obra_social = await db.query('SELECT nombre, descripcion FROM obras_sociales WHERE ID = $1', [id]);
    if (obra_social.rowCount === 0)
      return next(createError(404, 'No se encontró la obra social '));
    else
      res.json(obra_social);
  } catch (error) {
    return next(createError, (400, 'Ocurrió un problema'));
  }
}

//Agregar Obra Social
const createObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    if (nombre === "") {
      return next(createError(400, 'Ingrese los datos requeridos'));
    } else {
      await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
      res.json({
        "status": "OK",
        "msg": "Se ha creado un nuevo registro"
      });
    }
  } catch (error) {
    return next(createError(400, 'No se pudo crear el registro'));
  }
}

//Actualizar Obra Social
 const updateObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
  } catch (error) {
    return next(createError(400, 'No se pudo actualizar el registro'));
  }
}

//Borrar Obra Social
const deleteObraSocial = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
    res.send(`Se elimino la obra social con el ID:  ${id}`);
  } catch (error) {
    return next(createError(400, 'No se pudo borrar el registro'));
  }
}

module.exports = {
  getObrasSociales,
  getObraSocialById,
  createObraSocial,
  updateObraSocial,
  deleteObraSocial
}