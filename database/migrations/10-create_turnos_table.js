export function up(knex) {
    return Promise.all ([  
        knex.schema.createTable('turnos', table =>{
        table.increments('id').primary();
        table.integer('id_paciente').references('pacientes.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_profesional').references('profesionales.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.text('practica');
        table.time('duracion');
    })
]);
}

export function down(knex) {
    return Promise.all ([ knex.schema.dropTable('turnos')]);
}