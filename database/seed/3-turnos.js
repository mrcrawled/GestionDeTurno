exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('turnos').del()
        .then(() => {
            // Inserts seed entries
            return knex('turnos').insert([
                {
                    id_paciente: 1,
                    id_profesional: 7,
                    practica: "Implante",
                    duracion: "1:30"
                }, {
                    id_paciente: 2,
                    id_profesional: 8,
                    practica: "Limpieza",
                    duracion: "0:30"
                },
                {
                    id_paciente: 3,
                    id_profesional: 8,
                    practica: "Brackets",
                    duracion: "2:00"
                },
                {
                    id_paciente: 4,
                    id_profesional: 8,
                    practica: "Limpieza",
                    duracion: "1:00"
                },
                {
                    id_paciente: 6,
                    id_profesional: 8,
                    practica: "Limpieza",
                    duracion: "0:30"
                },
                {
                    id_paciente: 7,
                    id_profesional:8,
                    practica: "Tratamiento de conducto",
                    duracion: "2:00"
                },
                {
                    id_paciente: 8,
                    id_profesional: 8,
                    practica: "Arreglo de dientes",
                    duracion: "1:30"
                },
                {
                    id_paciente: 9,
                    id_profesional: 8,
                    practica: "Implante",
                    duracion: "2:00"
                },
                {
                    id_paciente: 10,
                    id_profesional: 7,
                    practica: "Brackets",
                    duracion: "1:30"
                },
                {
                    id_paciente: 11,
                    id_profesional: 8,
                    practica: "Brackets",
                    duracion: "1:30"
                },
            ]);
        });
};