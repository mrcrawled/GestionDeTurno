exports.up = (knex, Promise)=>{
    return Promise.all ([   
        knex.schema.createTable('obras_sociales', table =>{
        table.increments('id').primary();
        table.string('nombre',50).unique().notNullable();
        table.text('descripcion');
    })
]);
};

exports.down = (knex, Promise) => {
    return Promise.all ([knex.schema.dropTable('obras_sociales')]);
};