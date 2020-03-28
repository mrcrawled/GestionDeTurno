exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('estados').del()
    .then(() => {
        // Inserts seed entries
        return knex('estados').insert([
            {
                id: 1,
                descripcion: "ASIGNADO"
            },{
                id:2,
                descripcion: 'CANCELADO'
            },{
                id:3,
                descripcion: 'FINALIZADO'
            },{
                id:4,
                descripcion: "REPORGRAMADO"
            },{
                id:5,
                descripcion: "ESPERANDO"
            },{
                id:6,
                descripcion: "NO ASISTIO"
            }
        ]);
    });
};