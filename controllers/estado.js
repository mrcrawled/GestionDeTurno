const db = require('../database/config');
const controller = {};

//Listar Estados de  Turnos
controller.getEstados = async (req, res, next) => {
    try {
      const { estados } = await db.query('SELECT * FROM estados');
      res.json(estados);
    } catch (error) {
      console.log("Ocurrió un error " + error)
      res.sendStatus(500);
      next();
    }
  }

module.exports = controller;

