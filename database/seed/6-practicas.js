exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('practicas').del()
    .then( () => {
        // Inserts seed entries
        return knex('practicas').insert([
            {
                id_area: 1,
                duracion: '0:30',
                descripcion: "Implante"
            }
        ]);
    });
};
