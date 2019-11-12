exports.up = (knex) => {
    return Promise.all ([
    knex.schema.createTable('roles_permisos', table =>{
        table.increments('id').primary();
        table.integer('id_rol').references('roles.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_permiso').references('permisos.id').notNullable();
      })
    ]); 
};

exports.down = (knex)  => {
    return Promise.all ([knex.schema.dropTable('roles_permisos')]); 
};