const PacienteSql = require('./paciente.sql');
const bcrypt = require('bcryptjs');
const { capitalize } = require('../../utils/tools');
const UsuarioSql = require ('../usuario/usuario.sql')
const createError = require('http-errors');


module.exports = class PacienteController {
    constructor(db) {
        this.db = new PacienteSql(db);
        this.usuarioDB = new UsuarioSql(db);
    }

    /**
     * @description Listar Pacientes
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    get = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const pacientes = await this.db.fetchAll(limit, offset)
            return res.json(pacientes);
        } catch (error) {
            return next(createError(404,error, 'No se pudo listar'));
        }
    }

    /**
     * @description Listar paciente por id
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    getById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const paciente = await this.db.fetchById(id);
            res.json(paciente);
        } catch (error) {
            next(error);
        }
    }

    /**
     * @description Agregar Paciente
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    create = async (req, res, next) => {
        try {
            const {
                fecha_nacimiento,
                telefono,
                direccion,
                documento,
                email,
                id_obra_social,
                numero_afiliado,
            } = req.body;
            const nombre = capitalize(req.body.nombre);
            const apellido = capitalize(req.body.apellido);

            const { doc_numero } = documento;
            const username = `${apellido.toLowerCase()} ${nombre.toLowerCase()}`.replace(" ", "_");
            const password = bcrypt.hashSync(doc_numero, 10);
            const id_usuario = await this.usuarioDB.insertUsuario(username, password, email, 3);
            if(typeof id_usuario !== "number") throw ("No se pudo crear el usuario");
            if (nombre === "" || apellido === "") {
                return next(createError(400, 'Ingrese los datos requeridos'));
            }
            const id_paciente = await this.db.insert(nombre, apellido, fecha_nacimiento, documento, telefono, direccion, id_usuario);
            if(typeof id_paciente !== "number") throw ("No se pudo crear el paciente");

            if(id_obra_social > 0){
                await this.db.insertObraSocialPaciente(id_obra_social, id_paciente, numero_afiliado);
            }

            res.json({
                status: "OK",
                message: "Se ha creado un nuevo registro",
                body: {
                    paciente: {
                        username,
                        password,
                        id_usuario,
                        id_paciente
                    }
                }
            })
        } catch (error) {
            console.log(error);
            next(createError ((400, error,'No se pudo ingresar un nuevo registro')));
            res.sendStatus(400);
        };
    }

    /**
     * @description Actualizar Paciente
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     * @todo Migrar consultas SQL a paciente.sql
     */
    update = async (req, res, next) => {
        try {
            const id = req.params.id;
            const id_obra_social_paciente = req.params.id_obra_social_paciente

            const { 
                nombre,
                apellido,
                fecha_nacimiento,
                direccion,
                documento,
                telefono,
                id_obra_social,
                numero_afiliado,
            } = req.body;
console.log(nombre);
            const patient =await this.db.update(nombre,apellido,fecha_nacimiento,direccion,documento,telefono,id);
            console.log(patient);
            await this.db.updateObraSocialPaciente(numero_afiliado,id_obra_social_paciente);
            res.json({
                status: "OK",
                message: "Se ha actualizado el paciente",
                body: {
                    paciente: {
                        nombre,apellido,fecha_nacimiento,direccion,documento,telefono
                    }
                }
            })

           
        } catch (error) {
            console.log(error);
            return next(createError(400, 'No se pudo actualizar el registro'));
        }
    }

    /**
     * @description Eliminar Paciente
     * @param {Request} req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            await this.db.delete(id);
            res.json({
                "status": "OK",
                "message": "Se ha eliminado el paciente"
            });
        } catch (error) {
            console.log(error);
            return createError(400,error, 'Ocurrió un problema');
        }
    }
}
