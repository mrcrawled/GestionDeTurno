export function up(knex) {
    return Promise.all ([
    knex.schema.createTable('areas_especialidades', table =>{
        table.increments('id').primary();
        table.string('area_especialidad_tipo',80).unique().notNullable();
        table.text('descripcion');
    })
  ]);
}

export function down(knex) {
    return Promise.all ([knex.schema.dropTable('areas_especialidades')]);
}