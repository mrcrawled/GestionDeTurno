exports.up = (knex) => {
    return Promise.all([
        knex.schema.createTable('permisos', table => {
            table.increments('id').primary();
            table.string('permiso_tipo',50).unique().notNullable();
            table.text('descripcion');
        })
    ]);
};

exports.down = (knex)  => {
    return Promise.all([ knex.schema.dropTable('permisos')]);
};