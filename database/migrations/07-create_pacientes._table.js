exports.up = (knex) => {
    return Promise.all ([ 
        knex.schema.createTable('pacientes', table => {
            table.increments('id').primary();
            table.string('nombre',50).index().notNullable();
            table.string ('apellido',50).index().notNullable();
            table.string('telefono', 20);
            table.date('fecha_nacimiento');
            table.json('direccion');
            table.integer('documento').index().notNullable().unique();
            table.timestamp('fecha_alta',{ useTz: true }).defaultTo(knex.fn.now());
            table.integer('id_usuario').references('usuarios.id').onDelete('cascade').onUpdate('restrict').notNullable();
        })
    ]);
}

exports.down = (knex) => {
    return Promise.all ([ knex.schema.dropTable('pacientes')]);
}