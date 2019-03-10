exports.up = (knex, Promise) => {
    return Promise.all ([  
        knex.schema.createTable('turnos', table =>{
        table.increments('id').primary();
        table.integer('id_paciente').references('pacientes.id').notNullable();
        table.integer('id_profesional').references('profesionales.id').notNullable();
        table.integer('id_practica').references('practicas.id').notNullable();
    })
]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([ knex.schema.dropTable('turnos')]);
};