export function up(knex){
    return Promise.all ([   
        knex.schema.createTable('obras_sociales', table =>{
        table.increments('id').primary();
        table.string('nombre',50).unique().index().notNullable();
        table.text('descripcion');
    })
]);
}

export function down(knex) {
    return Promise.all ([knex.schema.dropTable('obras_sociales')]);
}