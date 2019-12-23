const UsuarioSql = require('./usuario.sql');
const bcrypt = require('bcryptjs');

module.exports = class UsuarioController {
    constructor(db){
        this.db = new UsuarioSql(db);
    }

    /**
     * @description Listar Usuarios
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    get = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const usuarios = await this.db.fetchAllUsuarios(limit, offset);
            res.json(usuarios);
        } catch (error) {
            return createError(404, 'No se pudo listar');
        }
    }

    /**
     * @description Crear Usuario
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    create = async (req, res, next) => {
        try {
            const { username, email, id_rol } = req.body;
            const password = bcrypt.hashSync(req.body.password, 10);
            await this.db.insertUsuario(username, password, email, id_rol);
            res.json({
                status: "OK",
                message: "Se ha agregado un nuevo registro",
                body: {
                    usuario: {
                        username, password, email, id_rol
                    }
                }
            })
        } catch (error) {
            return next(createError, (400, 'No se puedo crear un nuevo registro'));
        }
    }

    /**
     * @description Actualizar Usuario
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    update = async (req, res, next) => {
        try {
            const id = req.params.id;
            const { username, email, id_rol } = req.body;
            const password = bcrypt.hashSync(req.body.password, 10);
            await this.db.updateUsuarios(username, password, email, id_rol, id);
            res.json({
                status: "OK",
                message: "Se ha actualizado el registro",
                body: {
                    usuario: {
                        username, password, email, id_rol
                    }
                }
            })
        } catch (error) {
            return next(createError, (400, 'No se puedo actualizar el registro'));
        }
    }

    /**
     * @description Borrar Usuario
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            await this.db.deleteUsuarios(id);
            res.send(`Se elimino el usuario con el ID:  ${id}`);
        } catch (error) {
            return next(createError(400, 'No se pudo borrar el registro'));
        }
    }
}
