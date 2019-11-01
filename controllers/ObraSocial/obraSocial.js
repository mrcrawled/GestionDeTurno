const db = require('../../database/config');

//Listar Obras Sociales
let getObrasSociales = async (req, res, next) => {
  try {
    const obras_sociales = await db.query('SELECT nombre,descripcion FROM obras_sociales ORDER BY nombre ASC');
    res.status(200).json(obras_sociales.rows);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}

//Lista Obra Social por id
let getObraSocialById = async (req, res, next) => {
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
let createObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    if(nombre === ""){
      res.json("Falta un dato requerido")
    }else
    await db.query('INSERT INTO obras_sociales (nombre,descripcion) VALUES ($1,$2)', [nombre, descripcion]);
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
let updateObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    const obraSocial = await db.query('UPDATE obras_sociales SET nombre = $1,descripcion = $2 WHERE ID = $3 ', [nombre, descripcion, id]);
    res.json({
      status: "OK",
      message: "Se ha actualizado el registro",
      body: {
        obra_social: {
          nombre, descripcion
        }
      }
    })
  } catch (error) {
    console.log("Ocurrio un problema al actualizar el registro" + error)

  }
}

//Borrar Obra Social
let deleteObraSocial = async (req, res, next) => {
  try {
    const id = req.params.id;

    await db.query('DELETE FROM obras_sociales where ID = $1', [id]);
    res.json(`Se elimino la obra social:  ${id}`);
  } catch (error) {
    console.log("Ocurrio un problema al borrar el registro" + error)
  }
}

module.exports = {
  getObrasSociales,
  getObraSocialById,
  createObraSocial,
  updateObraSocial,
  deleteObraSocial
}