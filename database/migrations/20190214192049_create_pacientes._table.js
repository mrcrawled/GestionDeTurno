exports.up = (knex, Promise)=>{
    return Promise.all ([ 
        knex.schema.createTable('pacientes', table =>{
        table.increments('id').primary();
        table.string('nombre',50).index().notNullable();
        table.string ('apellido',50).index().notNullable();
        table.date('fecha_nacimiento');
        table.json('direccion');
        table.json('documento');
        table.integer('id_usuario').references('usuarios.id').onDelete('cascade').onUpdate('restrict').notNullable();
      })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all ([ knex.schema.dropTable('pacientes')]);
};