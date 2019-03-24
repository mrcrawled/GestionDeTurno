const db = require('../database/config');
const bcrypt = require ('bcrypt');

//Listar Usuarios
let getUsuarios = async (req, res,next) => {
  try {
    let limit = 1000;
    if(req.query['limit']){
      limit = req.query['limit'];
    }
    const usuarios  = await db.query('SELECT * FROM usuarios LIMIT $1', [limit]); 
      res.send(usuarios.rows);
    } catch (error) {
      next (error);
    }
}

  //Agrega usuario
  let createUsuario = async (req, res,next) =>{
    try{
    const {username,email,id_rol} = req.body;
    const password = await bcrypt.hashSync(req.body.password,10);

    const usuario = await db.query('INSERT INTO usuarios (username,password,email,id_rol) VALUES ($1,$2,$3,$4)', [username, password,email,id_rol]);
    res.send(usuario);
  }
    catch (error) {
      next (error);

    }
  }

  //Actualiza usuario
  let updateUsuario = async (req, res,next) => {
  try
   {  
    const id = req.params.id; 
    const {username,email,id_rol} = req.body;
    const password = await bcrypt.hashSync(req.body.password,10);

    const usuario = await db
      .query('UPDATE USUARIOS SET username = $1,password = $2,email = $3,id_rol = $4 WHERE id = $5', [username, password,email,id_rol,id]);
      res.send (usuario);
      }
        catch (error) {
           next (error);
      }
  }
    
  //Borra Usuario
  let deleteUsuario = async (req, res,next) =>{
    try   
    {
      const id = req.params.id; 

      const usuario = await db.query('DELETE FROM USUARIOS WHERE id = $1',[id]);
      res.send (usuario);
     }    
      catch (error) {
        next (error);
   }
  }

  module.exports ={
    getUsuarios: getUsuarios,
    createUsuario: createUsuario,
    updateUsuario: updateUsuario,
    deleteUsuario: deleteUsuario
  }