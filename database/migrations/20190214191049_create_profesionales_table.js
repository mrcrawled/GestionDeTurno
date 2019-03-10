exports.up = (knex, Promise)=>{
    return Promise.all ([ 
        knex.schema.createTable('profesionales', table =>{
        table.increments('id').primary();
        table.integer('id_usuario').references('usuarios.id').notNullable();
    })
    ]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([ knex.schema.dropTable('profesionales')]);
};