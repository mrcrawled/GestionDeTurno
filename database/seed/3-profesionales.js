exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('profesionales').del()
    .then( () => {
        // Inserts seed entries
        return knex('profesionales').insert([
            { id_usuario: "6",
            },{ id_usuario: "7",
            },{ id_usuario: "8",
            },{ id_usuario: "9",
            },{ id_usuario: "10",
            },{ id_usuario: "11",
            },{ id_usuario: "12",
            },{ id_usuario: "13",
            },{ id_usuario: "14",
            },{ id_usuario: "15",
            },{ id_usuario: "16",
            }
        ]);
    });
};
