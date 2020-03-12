exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('informacion_turnos').del()
        .then(() => {
            // Inserts seed entries
            return knex('informacion_turnos').insert([
                {
                    id_turno: 1,
                    id_estado: 1,
                    fecha_hora_turno: "1954-8-26 16:30:00",
                },
            ]);
        });
};