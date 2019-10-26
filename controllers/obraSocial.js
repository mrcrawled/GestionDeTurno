const db = require('../database/config');
const controller = {};

//Listar Obras Sociales
controller.getObrasSociales = async (req, res, next) => {
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
controller.getObraSocialById = async (req, res, next) => {
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
controller.createObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    if (nombre === "") {
      res.json('Ingrese los datos requeridos')
      next();
    } else {
      const obraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
      res.json({
        "status": "OK",
        "msg": "Se ha creado un nuevo registro"
      });

    }
  } catch (error) {
    console.log("Ya Existe el registro " + error)
  }
}

//Actualizar Obra Social
controller.updateObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
    console.log(obraSocial);
  } catch (error) {
    console.log("Ocurrio un problema al actualizar el registro" + error)

  }
}

//Borrar Obra Social
controller.deleteObraSocial = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
    res.send(`Se elimino la obra social con el ID:  ${id}`);
  } catch (error) {
    console.log("Ocurrio un problema al borrar el registro" + error)
    next(error);
  }
}

module.exports = controller;