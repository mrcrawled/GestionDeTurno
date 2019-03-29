exports.up = (knex, Promise) => {
    return Promise.all ([  
        knex.schema.createTable('turnos', table =>{
        table.increments('id').primary();
        table.integer('id_paciente').references('pacientes.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_profesional').references('profesionales.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_practica').references('practicas.id').onDelete('cascade').onUpdate('restrict').notNullable();
    })
]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([ knex.schema.dropTable('turnos')]);
};