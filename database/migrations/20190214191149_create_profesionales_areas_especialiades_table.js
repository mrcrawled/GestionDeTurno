exports.up = (knex, Promise)=>{
  return Promise.all ([  
      knex.schema.createTable('profesionales_areas_especialidades', table =>{
      table.increments('id').primary();
      table.integer('id_profesional').references('profesionales.id').notNullable();
      table.integer('id_area_especialidad').references('areas_especialidades.id').notNullable();
  })
]);
};

exports.down = (knex, Promise) => {
  return Promise.all ([ knex.schema.dropTable('profesionales_areas_especialidades')]);
};