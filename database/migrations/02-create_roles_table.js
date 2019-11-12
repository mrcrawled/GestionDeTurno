exports.up = (knex) => {
    return Promise.all([
    knex.schema.createTable('roles', table =>{
        table.increments('id').primary();
        table.string('rol_tipo',50).unique().notNullable();
        table.text('descripcion');
     })
  ]);
};

exports.down = (knex) => {
    return Promise.all([ knex.schema.dropTable('roles')]);
};