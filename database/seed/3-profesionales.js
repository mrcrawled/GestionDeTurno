exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('profesionales').del()
    .then( () => {
        // Inserts seed entries
        return knex('profesionales').insert([
            {
                id: "1",
                id_usuario: "6",
            },{
                id: "2",
                id_usuario: "7",
            },{
                id: "3",
                id_usuario: "8",
            },{
                id: "4",
                id_usuario: "9",
            },{
                id: "5",
                id_usuario: "10",
            },{
                id: "6",
                id_usuario: "11",
            },{
                id: "7",
                id_usuario: "12",
            },{
                id: "8",
                id_usuario: "13",
            },{
                id: "9",
                id_usuario: "14",
            },{
                id: "10",
                id_usuario: "15",
            },{
                id: "11",
                id_usuario: "16",
            },
        ]);
    });
};
