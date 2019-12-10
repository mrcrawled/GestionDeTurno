const db = require('../config');
const createError = require('http-errors');

//Listar Obras Sociales
const fetchAllObrasSociales = async () => {
  try {
    const obras_sociales = await db.query('SELECT nombre, descripcion FROM obras_sociales ORDER BY nombre ASC');
    console.log(obras_sociales);
    return obras_sociales.rows;
  } catch (error) {
    return createError(404, 'No se pudo listar');
  }
}


const fetchObraSocial = async (id) => {
  try {
    const obra_social = await db.query('SELECT nombre, descripcion FROM obras_sociales WHERE ID = $1', [id]);
    if (obra_social.rowCount === 0)
      return createError(404, 'No se encontró la obra social ');
    else
      return obra_social.rows[0];
  } catch (error) {
    return createError(400, 'Ocurrió un problema');
  }
}


const insertObraSocial = async (nombre,descripcion) => {
  try {
  const newObraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)',[nombre, descripcion]);
  return newObraSocial;    
    }catch (error) {
    return createError(400, 'No se pudo crear el registro');
  }

}

const updateObrasSociales = async (nombre,descripcion,id) => {
  try {
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
    return obraSocial;
  } catch (error) {
    return createError(400, 'No se pudo actualizar el registro');
  }
}


const deleteObrasSociales = async (id) => {
  try {
    const removeObraSocial = await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
return removeObraSocial;
  } catch (error) {
    return createError(400, 'No se pudo borrar el registro');
  }
}

module.exports = {
  fetchAllObrasSociales,
  fetchObraSocial,
  insertObraSocial,
  updateObrasSociales,
  deleteObrasSociales
}