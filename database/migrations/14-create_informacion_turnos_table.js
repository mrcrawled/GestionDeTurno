exports.up = (knex) => {
    return Promise.all ([   
        knex.schema.createTable('informacion_turnos', table =>{
        table.increments('id').primary();
        table.integer('id_turno').references('turnos.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.integer('id_estado').references('estados.id').onDelete('cascade').onUpdate('restrict').notNullable();
        table.datetime('fecha_hora_turno').notNullable();
        table.date('fecha_alta',{ useTz: true }).defaultTo(knex.fn.now());
        table.date('fecha_baja',{ useTz: true }).defaultTo(knex.fn.now());
        table.text('descripcion');
    })
]);
};

exports.down = (knex) => {
    return Promise.all ([knex.schema.dropTable('informacion_turnos')]);
};