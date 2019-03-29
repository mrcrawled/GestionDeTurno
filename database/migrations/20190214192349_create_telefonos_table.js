exports.up = (knex, Promise) => {
    return Promise.all ([   
        knex.schema.createTable('telefonos', table =>{
        table.increments('id').primary();
        table.string('numero',20);
        table.enu('tipo',['FIJO','CELULAR'],{useNative:true,enumName: 'telefono_tipo'});
        table.boolean('activo').defaultTo(true);
        table.integer('id_paciente').references('pacientes.id').onDelete('cascade').onUpdate('restrict').notNullable();
      })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all ([knex.schema.dropTable('telefonos')]);
};