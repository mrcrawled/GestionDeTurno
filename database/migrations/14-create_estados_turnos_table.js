exports.up = (knex) => {
    return Promise.all ([   
        knex.schema.createTable('estados_turnos', table =>{
        table.increments('id').primary();
        table.integer('id_turno').references('estados.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_estado').references('turnos.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.datetime('fecha_hora_turno').notNullable();
        table.date('fecha_alta').notNullable();
        table.date('fecha_baja');
        table.text('descripcion');
    })
]);
};

exports.down = (knex) => {
    return Promise.all ([knex.schema.dropTable('estados_turnos')]);
};