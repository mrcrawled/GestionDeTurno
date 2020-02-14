const RolSql = require('./rol.sql');
const createError = require('http-errors');

module.exports = class RolController {
    constructor(db){
        this.db = new RolSql(db);
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    get = async (req, res, next) => {
        try {
            const roles = await this.db.selectAll();
            res.send(roles);
        } catch (error) {
            next(createError(error, 'No se pudo listar'));
        }
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    create = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const rol = await this.db.insert(rol_tipo, descripcion);
            res.send(rol);
        } catch (error) {
            next(createError(error, 'No se pudo crear'));
        }
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    update = async (req, res, next) => {
        try {
            const { rol_tipo, descripcion } = req.body;
            const id = req.params.id;
            const rol = await this.db.update(id, rol_tipo, descripcion);
            res.send(rol);
        } catch (error) {
            next(createError(error, 'No se pudo actualizar'));
        }
    }

    /**
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            const rol = await this.db.delete(id);
            res.send(rol);
        } catch (error) {
            next(createError(error, 'No se pudo eliminar'));
        }
    }
}
