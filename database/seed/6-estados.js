exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('estados').del()
    .then( () => {
        // Inserts seed entries
        return knex('estados').insert([
            {
                estado_tipo: 'ASIGNADO',
            }
        ]);
    });
};
