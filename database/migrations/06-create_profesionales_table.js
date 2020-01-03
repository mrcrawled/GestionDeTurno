exports.up = (knex)=>{
    return Promise.all ([ 
        knex.schema.createTable('profesionales', table =>{
        table.increments('id').primary();
        table.integer('id_usuario').references('usuarios.id').onDelete('cascade').onUpdate('restrict').notNullable();
    })
    ]);
};

exports.down = (knex) => {
    return Promise.all ([ knex.schema.dropTable('profesionales')]);
};