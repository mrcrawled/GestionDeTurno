exports.up = (knex) => {
    return Promise.all ([
      knex.schema.createTable('usuarios', table =>{
      table.increments('id').primary();
      table.string('username',30).unique().notNullable();
      table.text('password').notNullable();
      table.string('email',60).notNullable();
      table.integer('id_rol').references('roles.id').onDelete('cascade').onUpdate('restrict').notNullable();
    }),
   ]);
  };
  
  exports.down = (knex) => {
     return Promise.all ([knex.schema.dropTable('usuarios')]);
  };