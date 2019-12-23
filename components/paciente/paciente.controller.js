const PacienteSql = require('./paciente.sql');
const bcrypt = require('bcrypt');
const { capitalize } = require('../../utils/tools');
const createError = require('http-errors');

module.exports = class PacienteController {
    constructor(db) {
        this.db = new PacienteSql(db);
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
            res.json(pacientes);
        } catch (error) {
            return next(error);
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
                doc_numero,
                email,
                id_obra_social,
                numero_afiliado
            } = req.body;
            const nombre   = capitalize(req.body.nombre);
            const apellido = capitalize(req.body.apellido);
            if( nombre.length == 0 ||
                apellido.length == 0 ||
                fecha_nacimiento.length == 0 ||
                direccion.length == 0 ||
                documento.length == 0 ||
                doc_numero.length == 0 ||
                email.length == 0 ||
                (id_obra_social.length == 0 && numero_afiliado)
            ){
                res.json({
                    "status": "ERROR",
                    "msg": "Faltan datos requeridos"
                });
                return;
            }
            const username = `${apellido.toLowerCase()}_${nombre.toLowerCase()}`;
            const password = bcrypt.hashSync(doc_numero, 10);
            const id_paciente = await this.db.create(username, password, email, nombre, apellido, fecha_nacimiento, documento, email, telefono, direccion, id_obra_social, numero_afiliado);
            res.json({
                "status": "OK",
                "id_paciente": id_paciente
            });
        } catch (error) {
            console.log(error);
            return createError(400, 'Ocurrió un problema');
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
            const { id: id_paciente } = req.params;
            const { 
                nombre,
                apellido,
                fecha_nacimiento,
                direccion,
                documento,
                telefono,
                email,
                id_obra_social,
                numero_afiliado
            } = req.body;
            const { rowCount: is_update_paciente } = await db.query(
                `UPDATE pacientes set ${[
                    `nombre = $1`,
                    `apellido = $2`,
                    `direccion = $3`,
                    `documento = $4`,
                    `fecha_nacimiento = $5`,
                    `telefono = $6`
                ].toString()} WHERE id = $7`,
                [
                    nombre,
                    apellido,
                    direccion,
                    documento,
                    fecha_nacimiento,
                    telefono,
                    id_paciente
                ]
            );
            const {rows: [{id_usuario}]} = await db.query('SELECT * FROM pacientes WHERE ID = $1',[id_paciente]);
            const { rowCount: is_update_usuario } = await db.query(
                `UPDATE usuarios set email = $1 WHERE id = $2`,
                [
                    email,
                    id_usuario
                ]
            );
            const {rows: [obra_social_paciente], rowCount: exist_osp} = await db.query(
                [
                    `SELECT * FROM obras_sociales_pacientes`,
                        `WHERE id_paciente = $1 AND id_obra_social = $2 AND activo=TRUE`
                ].join(" "),
                [
                    id_paciente,
                    id_obra_social
                ]
            );
    
            let is_inserted_osp = 0;
            if(exist_osp){
                const {id: id_obra_social_paciente} = obra_social_paciente;
                const {rowCount} = await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET numero_afiliado = $1`,
                        `WHERE id = $2`
                    ].join(" "),
                    [
                        numero_afiliado,
                        id_obra_social_paciente
                    ]
                );
                is_inserted_osp = rowCount;
            } else {
                const {rowCount: affected} = await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET activo=FALSE`,
                        `WHERE id_paciente = $1`
                    ].join(" "),
                    [
                        id_paciente
                    ]
                );
                console.log(affected);
                const {rowCount} = await db.query(
                    [
                        `INSERT INTO obras_sociales_pacientes`,
                            `(id_obra_social, id_paciente, numero_afiliado, activo)`,
                            `VALUES ($1,$2,$3,$4)`
                    ].join(" "),
                    [
                        id_obra_social,
                        id_paciente,
                        numero_afiliado,
                        true
                    ]
                );
                is_inserted_osp = rowCount;
            }
            if(is_update_paciente > 0 && is_update_usuario > 0 && is_inserted_osp > 0){
                this.getById(req, res, next);
            } else {
                res.status(400).json("Error al actualizar");
            }
        } catch (error) {
            console.log(error);
            return createError(400, 'Ocurrió un problema');
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
            const paciente = await this.db.delete(id);
            res.json({
                "status": "OK",
                "message": "Se ha eliminado el paciente"
            });
        } catch (error) {
            console.log(error);
            return createError(400, 'Ocurrió un problema');
        }
    }
}
