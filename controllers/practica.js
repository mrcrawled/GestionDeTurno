const db = require('../database/config');
const moment = require('moment');
const controller = {};

//Listar Practicas Profesionales
controller.getPracticasProfesionales = async (req, res, next) => {
  try {
    const practicasProfesionales = await db.query('SELECT descripcion,duracion FROM practicas ORDER BY descripcion ASC');
    return res.status(200).json(practicasProfesionales.rows);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
}


//Agregar Practica Profesional
controller.createPracticasProfesionales = async (req, res, next) => {
  try {
    const { descripcion } = req.body;
    const duracion = moment(req.body.duracion,"HH:mm").format("HH:mm");
    console.log(duracion);
    const practicaProfesional = await db.query('INSERT INTO practicas (descripcion,duracion) VALUES ($1,$2)', [descripcion, duracion]);
    return res.json({
      status: "OK",
      message: "Se ha agregado un nuevo registro",
      body: {
        practica_profesional: {
          descripcion, duracion
        }
      }
    })
  } catch (error) {
    console.log(error);
    return res.json("Oucrrió un problema al agregar el regsitro "+error);

  }
}

//Actualizar Practica Profesional
controller.updatePracticaProfesional = async (req, res, next) => {
  try {
    const { descripcion,duracion } = req.body;
    const id = req.params.id;
    await db.query('UPDATE practicas SET descripcion = $1,duracion = $2 WHERE ID = $3 ', [descripcion,duracion, id]);
    return res.json({
      status: "OK",
      message: "Se ha actualizado el registro",
      body: {
        practica_profesional: {
          descripcion, duracion
        }
      }
    })
  } catch (error) {
    console.log(error);
    return res.json("Oucrrión un problema al actualizar el regsitro "+error);

  }
}

//Borrar Practica Profesional
controller.deletePracticaProfesional = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.query('DELETE FROM practicas where ID = $1', [id]);
    return res.json(`Se elimino la práctica profesional con el ID:  ${id}`);
  } catch (error) {
    console.log (error);
    return res.json("Ocurrio un problema al borrar el registro" + error);
  }
}

module.exports = controller;