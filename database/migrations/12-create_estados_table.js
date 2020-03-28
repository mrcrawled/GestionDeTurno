exports.up = (knex) => {
    return Promise.all ([   
        knex.schema.createTable('estados', table =>{
        table.increments('id').primary();
        table.text('descripcion').unique();
    })
]);
};

exports.down = (knex) => {
    return Promise.all ([knex.schema.dropTable('estados')]);
};