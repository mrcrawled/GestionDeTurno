exports.up = (knex, Promise) => {
    return Promise.all ([   
        knex.schema.createTable('telefonos_pacientes', table =>{
        table.increments('id').primary();   
        table.boolean('activo').defaultTo(true);
        table.integer('id_paciente').references('pacientes.id').notNullable();
        table.integer('id_telefono').references('telefonos.id').notNullable();
      })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all ([knex.schema.dropTable('telefonos_pacientes')]);
};