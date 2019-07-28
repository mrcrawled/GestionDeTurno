const db = require('../database/config');

//Listar Obras Sociales
let getObrasSociales = async (req, res, next) => {
  try {
    const obras_sociales = await db.query('SELECT * FROM obras_sociales ORDER BY nombre ASC');
    res.json(obras_sociales.rows);
  } catch (error) {
    console.log("Ocurrió un error " + error)
    res.sendStatus(500);
    next();
  }
}

//Lista Obra Social por id
let getObraSocialById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obra_social = await db.query('SELECT * FROM obras_sociales WHERE ID = $1', [id]);
    res.send(obra_social.rows[0]);
  } catch (error) {
    res.sendStatus(500);
    next();
  }
}

//Agregar Obra Social
let createObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const obraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
    if (obraSocial.rows > 0) {
      console.log("Ya Existe el registro")
      next();
    }
    else {
      res.json({
      "status":  "OK",
      "msg": `Nueva obra social: ${nombre}`
      })
    }
  } catch (error) {
    console.log("Ya Existe el registro " + error)
    res.sendStatus(500);

  }
}

//Actualizar Obra Social
let updateObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
    console.log(obraSocial);
  } catch (error) {
    res.sendStatus(500);
    return
  }
}

//Borrar Obra Social
let deleteObraSocial = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
    res.send(`Se elimino la obra social con el ID:  ${id}`);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getObrasSociales: getObrasSociales,
  getObraSocialById: getObraSocialById,
  createObraSocial: createObraSocial,
  updateObraSocial: updateObraSocial,
  deleteObraSocial: deleteObraSocial
}