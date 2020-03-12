exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('turnos').del()
        .then(() => {
            // Inserts seed entries
            return knex('turnos').insert([
                {
                    id_paciente: 1,
                    id_profesional: 6,
                    practica: "Implante",
                    duracion: "1:30"
                }, {
                    id_paciente: 1,
                    id_profesional: 7,
                    practica: "Limpieza",
                    duracion: "0:30"
                },
            ]);
        });
};