exports.up = (knex) => {

    return Promise.all([
        knex.schema.createTable('obras_sociales_pacientes', table => {
            table.increments('id').primary();
            table.integer('id_obra_social').references('obras_sociales.id').onDelete('cascade').onUpdate('restrict').notNullable();
            table.integer('id_paciente').references('pacientes.id').onDelete('cascade').onUpdate('restrict').notNullable();
            table.string('numero_afiliado', 50);
            table.boolean('activo').notNullable();
        })
    ]);
}

exports.down = (knex) => {
    return Promise.all([knex.schema.dropTable('obras_sociales_pacientes')]);
}