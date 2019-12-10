const obraSocial = require('../database/data/obraSocial');
const createError = require('http-errors')

//Listar Obras Sociales
const getObrasSociales = async (req, res, next) => {
  try {
    const obras_sociales = await obraSocial.fetchAllObrasSociales();
    return res.json(obras_sociales);
  } catch (error) {
    return next(createError(404, 'No se pudo listar'));
  }
}

//Lista Obra Social por id
const getObraSocialById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const obra_social = await obraSocial.fetchObraSocial(id);
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
      await obraSocial.insertObraSocial(nombre,descripcion);
      res.json({
        status: "OK",
        message: "Se ha agregado un nuevo registro",
        body: {
          obra_social: {
            nombre, descripcion
          }
        }
      })
    }
  }catch (error) {
    return next(createError, (400, 'No se puedo crear un nuevo registro'));
    }
}
  
//Actualizar Obra Social
 const updateObraSocial = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const id = req.params.id;
    await obraSocial.updateObrasSociales(nombre, descripcion, id);
    res.json({
      status: "OK",
      message: "Se ha actualizado el registro",
      body: {
        obra_social: {
          nombre, descripcion
        }
      }
    })
  }catch (error) {
    return next(createError(400, 'No se pudo actualizar el registro'));
  }
}
 
//Borrar Obra Social
const deleteObraSocial = async (req, res, next) => {
  try {
    const id = req.params.id;
    await obraSocial.deleteObrasSociales(id);
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