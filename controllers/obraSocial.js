const db = require('../database/config');

//Listar Obras Sociales
let getObrasSociales = async (req, res,next) => {
  try {
    const obras_sociales = await db.query('SELECT * FROM obras_sociales ORDER BY nombre ASC'); 
    res.json(obras_sociales.rows);
  } catch (error) {
    next(error);
  }
}

//Lista Obra Social por id
let getObraSocialById = async (req, res,next) => {
  try {
    const id = req.params.id;
    const obra_social = await db.query('SELECT * FROM obras_sociales WHERE ID = $1',[id]);
    res.json(obra_social.rows[0]);
  } catch (error) {
    next (error);
  }
}

//Agregar Obra Social
let createObraSocial = async (req, res,next) =>{
  try {
    const { nombre, descripcion} = req.body;
    const obraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)',[nombre,descripcion]);
    const id_obra_social = obraSocial.rows[0].id;
    res.json({
      "status": "OK",
      "id_obra_social": id_obra_social
    });
  } catch (error) {
    next (error);
    db.close();
  }
}
  
//Actualizar Obra Social
let updateObraSocial = async (req, res,next) => {
  try {
    const {nombre, descripcion} = req.body;
    const id = req.params.id;
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ',[nombre,descripcion,id]);
    console.log(obraSocial);
  } catch (error) {
    next (error);
  }
}

//Borrar Obra Social
let deleteObraSocial = async (req, res,next) =>{
  try {
    const id = req.params.id;
    const obraSocial =  await db.query('DELETE FROM obras_sociales where ID = $1',[id]);
    res.json({
      "status": "OK",
      "message": "Se ha eliminado la Obra Social"

  });

    res.send (obraSocial);
  } catch (error) {
    next (error);
  }
}

module.exports = {
  getObrasSociales: getObrasSociales,
  getObraSocialById: getObraSocialById,
  createObraSocial: createObraSocial,
  updateObraSocial: updateObraSocial,
  deleteObraSocial: deleteObraSocial
}