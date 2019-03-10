exports.up = (knex, Promise) => {
    return Promise.all ([
    knex.schema.createTable('estados', table =>{
        table.increments('id').primary();
        table.enu('estado_tipo',['ASIGNADO','CANCELADO','FINALIZADO','REPROGRAMADO','ESPERANDO'],{useNative:true,enumName: 'telefono_tipo'});
      })
    ]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([knex.schema.dropTable('estados')]);
};