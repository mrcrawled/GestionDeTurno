exports.up = (knex, Promise) => {
    return Promise.all ([ 
        knex.schema.createTable('practicas', table =>{
        table.increments('id').primary();
        table.time('duracion');
        table.text('descripcion');
        table.integer('id_area').references('areas_especialidades.id').onDelete('cascade').onUpdate('restrict').notNullable();
    })
  ]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([ knex.schema.dropTable('practicas')]);
};