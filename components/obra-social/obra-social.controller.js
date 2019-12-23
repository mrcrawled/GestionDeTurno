const ObraSocialSql = require('./obra-social.sql');
const createError = require('http-errors');

module.exports = class ObraSocialController {
    constructor(db) {
        this.db = new ObraSocialSql(db);
    }

    /**
     * @description Listar Obras Sociales
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    get = async (req, res, next) => {
        try {
            const obras_sociales = await this.db.fetchAll();
            res.json(obras_sociales);
        } catch (error) {
            return next(createError(404, 'No se pudo listar'));
        }
    }

    /**
     * @description Lista Obra Social por id
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    getById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const obra_social = await this.db.fetchById(id);
            res.json(obra_social);
        } catch (error) {
            return next(createError, (400, 'Ocurrió un problema'));
        }
    }

    /**
     * @descritption Agregar Obra Social
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    create = async (req, res, next) => {
        try {
            const { nombre, descripcion } = req.body;
            if (nombre === "") {
                return next(createError(400, 'Ingrese los datos requeridos'));
            } else {
                await this.db.insert(nombre, descripcion);
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
        } catch (error) {
            return next(createError, (400, 'No se puedo crear un nuevo registro'));
        }
    }

    /**
     * @description Actualizar Obra Social
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    update = async (req, res, next) => {
        try {
            const { nombre, descripcion } = req.body;
            const id = req.params.id;
            await this.db.update(nombre, descripcion, id);
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
            return next(createError(400, 'No se pudo actualizar el registro'));
        }
    }

    /**
     * @description Borrar Obra Social
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            const deleted = await this.db.delete(id);
            if(!deleted){
                throw ("No se pudo eliminar");
            }
            res.json(`Se elimino la obra social con el ID:  ${id}`);
        } catch (error) {
            return createError(400, 'No se pudo borrar el registro');
        }
    }
}
