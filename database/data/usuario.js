const db = require('../config');
const createError = require('http-errors');
const bcrypt = require('bcrypt');

//Listar Obras Sociales
const fetchAllUsuarios = async (limit,offset) => {
  try {
    const usuarios = await db.query('SELECT * FROM usuarios LIMIT $1 OFFSET $2', [limit, offset]);
    return usuarios.rows;
  } catch (error) {
    return createError(404, 'No se pudo listar');
  }
}

const insertUsuario = async (username, password,email, id_rol) => {
  try {
    const newUsuario = await db.query('INSERT INTO usuarios (username,password,email,id_rol) VALUES ($1,$2,$3,$4)', [username, password, email, id_rol]);
    console.log(newUsuario);
    return newUsuario;    
    }catch (error) {
    return createError(400, 'No se pudo crear el registro');
  }

}

const updateUsuarios = async (username, password,email, id_rol,id) => {
  try {
    const usuario = await db.query('UPDATE usuarios SET username = $1,password = $2,email = $3,id_rol = $4 WHERE id = $5', [username, password, email, id_rol, id]);
    return usuario;
  } catch (error) {
    return createError(400, 'No se pudo actualizar el registro');
  }
}


const deleteUsuarios = async (id) => {
  try {
    const removeUsuario = await db.query('DELETE FROM USUARIOS WHERE id = $1', [id]);
    return removeUsuario;
  } catch (error) {
    return createError(400, 'No se pudo borrar el registro');
  }
}

module.exports = {
fetchAllUsuarios,
insertUsuario,  
updateUsuarios,
deleteUsuarios
}