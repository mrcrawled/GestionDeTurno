const db = require('../database/config');

class EstadoController {
    get = (req,res,next) => { next(); }
    getById = (req,res,next) => { next(); }
    create = (req,res,next) => { next(); }
    update = (req,res,next) => { next(); }
    delete = (req,res,next) => { next(); }
}

module.exports = new EstadoController();