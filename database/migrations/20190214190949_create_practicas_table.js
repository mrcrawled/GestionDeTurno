exports.up = (knex, Promise) => {
    return Promise.all ([ 
        knex.schema.createTable('practicas', table =>{
        table.increments('id').primary();
        table.integer('id_area').references('areas_especialidades.id').notNullable();
        table.time('duracion');
        table.text('descripcion');
    })
  ]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([ knex.schema.dropTable('practicas')]);
};