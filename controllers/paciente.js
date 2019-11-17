const db = require('../database/config');
const bcrypt = require('bcrypt');
const { capitalize } = require('../utils/tools')

class PacienteController{
    //Listar Pacientes
    getPacientes = async (req, res, next) => {
        try {
            let limit = req.body['limit'] || 1000;
            let offset = req.body['offset'] || 0;
            const pacientes = await db.query("SELECT id, nombre, apellido, documento, telefono FROM pacientes ORDER BY apellido ASC LIMIT $1 OFFSET $2", [limit, offset]);
            if(!pacientes)
                throw new Excecption("No se han encontrado pacientes")
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
    
    
    //Lista Paciente por id
    getPacienteById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const paciente = await db.query('SELECT * FROM pacientes WHERE id = $1 LIMIT 1',[id]);
            if( !paciente )
                throw new Error("No existe el paciente");
            const usuario = await db.query('SELECT * FROM usuarios WHERE id = $1 LIMIT 1', [paciente.id_usuario]);
            if( !usuario )
                throw new Error("No existe el paciente");
            const obraSocialPaciente = await db.query('SELECT * FROM obras_sociales_pacientes WHERE id_paciente = $1 AND activo = TRUE LIMIT 1',[id]);
            let obraSocial;
            if( obraSocialPaciente ){
                obraSocial = await db.query('SELECT * FROM obras_sociales WHERE id = $1 LIMIT 1',[obraSocialPaciente.id_obra_social]);
                console.log(obraSocial);
                if( !obraSocial )
                    throw new Error("No existe la obra social");
            }
            res.status(200).json({ //TODO cambiar respuesta segun existencia de obra social.
                id_paciente      : paciente.id,
                nombre           : paciente.nombre,
                apellido         : paciente.apellido,
                email            : usuario.email,
                fecha_nacimiento : paciente.fecha_nacimiento,
                documento        : paciente.documento,
                direccion        : paciente.direccion,
                id_usuario       : paciente.id_usuario,
                numero_afiliado  : obraSocialPaciente.numero_afiliado,
                id_obra_social   : obraSocial.id,
                obra_social      : obraSocial.nombre,
                username         : usuario.username
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ "message": error.message });
        }
    }
    
    //Agregar Paciente
    createPaciente = async (req, res, next) => {
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
            )
                throw new Error("Faltan datos requeridos");

            const username = `${apellido.toLowerCase()}_${nombre.toLowerCase()}`;
            const password = bcrypt.hashSync(doc_numero, 10);
            const usuario = await db.query('INSERT INTO usuarios (username, password, email, id_rol) VALUES ($1,$2,$3,$4) RETURNING *', [username, password, email, 3]);
            if(!usuario)
                throw new Error("No pudo crearse el usuario");
            const id_usuario = usuario.id;

            const paciente = await db.query('INSERT INTO pacientes (nombre,apellido,fecha_nacimiento,direccion,documento,id_usuario) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [nombre, apellido, fecha_nacimiento, direccion, documento, id_usuario,telefono]);
            if(!paciente)
                throw new Error("No pudo crearse el paciente");
            const id_paciente = paciente.id;

            const obra_social_paciente = await db.query('INSERT INTO obras_sociales_pacientes (id_obra_social, id_paciente, numero_afiliado, activo) VALUES ($1,$2,$3,$4) RETURNING *', [id_obra_social, id_paciente, numero_afiliado, true]);
            if(!obra_social_paciente)
                throw new Error("No pudo asociarse el paciente a la obra social");
            const obra_social = obra_social_paciente.nombre;

            console.log("data : ", { // Este dato podría borrarse o utilizarse para renderizar PacienteInfo después de agregar el paciente
                apellido,
                direccion,
                documento,
                email,
                fecha_nacimiento,
                telefono,
                id_obra_social,
                id_paciente,
                id_usuario,
                nombre,
                numero_afiliado,
                obra_social,
                username,
                
            });

            res.status(200).json({
                "id_paciente": id_paciente
            });
        } catch (error) {
            res.status(400).json({ "message": error.message });
        };
    };
    
    //Actualizar Paciente
    updatePaciente = async (req, res, next) => {
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
            const wasPacienteUpdated = await db.query(
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
            if(!wasPacienteUpdated)
                throw new Error("No se pudo actualizar el paciente");
            const { id_usuario } = await db.query('SELECT id_usuario FROM pacientes WHERE ID = $1 LIMIT 1',[id_paciente]);
            const wasUsuarioUpdated = await db.query(
                `UPDATE usuarios set email = $1 WHERE id = $2`,
                [
                    email,
                    id_usuario
                ]
            );
            if(!wasUsuarioUpdated)
                throw new Error("No se pudo actualizar el usuario");
            const obrasSocialesPacientes = await db.query(
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
            if(obrasSocialesPacientes){
                const {id: id_obra_social_paciente} = obrasSocialesPacientes[0];
                is_inserted_osp = await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET numero_afiliado = $1`,
                        `WHERE id = $2`
                    ].join(" "),
                    [
                        numero_afiliado,
                        id_obra_social_paciente
                    ]
                );
            } else {
                await db.query(
                    [
                        `UPDATE obras_sociales_pacientes SET activo=FALSE`,
                        `WHERE id_paciente = $1`
                    ].join(" "),
                    [
                        id_paciente
                    ]
                );
                is_inserted_osp = await db.query(
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
            }
            if(!is_inserted_osp)
                throw new Error("No se pudo asociar el paciente con la obra social");
            this.getPacienteById(req, res, next);
        } catch (error) {
            res.status(400).json(error);
        }
    };
    
    //Borrar Paciente
    deletePaciente = async (req, res, next) => {
        try {
            const id = req.params.id;
            const wasDeleted = await db.query('DELETE FROM pacientes where ID = $1', [id]);
            if(!wasDeleted)
                throw new Error("No se pudo eliminar el paciente");
            res.sendStatus(200);
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }
}

module.exports = new PacienteController(); // TODO: debería devolverse la clase no una instancia.