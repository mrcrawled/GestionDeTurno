exports.up = (knex, Promise) => {
    return Promise.all ([
    knex.schema.createTable('areas_especialidades', table =>{
        table.increments('id').primary();
        table.string('area_especilidad_tipo',80).unique().notNullable();
        table.text('descripcion');
    })
  ]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([knex.schema.dropTable('areas_especialidades')]);
};