const db = require('../database/config');
const controller = {};

//Listar Practicas Profesionales
controller.getPracticas = async (req, res, next) => {
  try {
    const practicas = await db.query('SELECT descripcion,duracion FROM practicas ORDER BY descripcion ASC');
    res.status(200).json(practicas.rows);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}

//Lista Obra Social por id
controller.getObraSocialById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obra_social = await db.query('SELECT * FROM obras_sociales WHERE ID = $1', [id]);
    if (obra_social.rowCount === 0) {
      res.json("No se encuentra la obra social")
    } else {
      res.json(obra_social.rows)
    }
  } catch (error) {
    res.status(400).json("Obra social inexistente");
  }
}

//Agregar Obra Social
controller.createObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const obraSocial = await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
    res.json({
      status: "OK",
      message: "Se ha agregado un nuevo registro",
      body: {
        obra_social: {
          nombre, descripcion
        }
      }
    })
  } catch (error) {
    console.log(error)
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
    res.json(`Se elimino la obra social con el ID:  ${id}`);
  } catch (error) {
    console.log("Ocurrio un problema al borrar el registro" + error)
    next(error);
  }
}

module.exports = controller;