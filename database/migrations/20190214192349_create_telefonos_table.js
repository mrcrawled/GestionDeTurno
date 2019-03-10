exports.up = (knex, Promise) => {
    return Promise.all ([   
        knex.schema.createTable('telefonos', table =>{
        table.increments('id').primary();
        table.json('telefono_numero');
        table.enu('telefono_tipo',['FIJO','CELULAR'],{useNative:true,enumName: 'telefono_tipo'});
      })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all ([knex.schema.dropTable('telefonos')]);
};