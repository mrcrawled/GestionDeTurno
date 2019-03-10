exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('profesionales_areas_especialidades').del()
    .then( () => {
        // Inserts seed entries
        return knex('profesionales_areas_especialidades').insert([
            {
                id: "1",
                id_profesional: "1",
                id_area_especialidad : "4"
            },{
                id: "2",
                id_profesional: "2",
                id_area_especialidad : "2"
            },{
                id: "3",
                id_profesional: "3",
                id_area_especialidad : "3"
            },{
                id: "4",
                id_profesional: "4",
                id_area_especialidad : "2"
            },{
                id: "5",
                id_profesional: "5",
                id_area_especialidad : "3"
            },{
                id: "6",
                id_profesional: "6",
                id_area_especialidad : "2"
            },{
                id: "7",
                id_profesional: "7",
                id_area_especialidad : "1"
            },{
                id: "8",
                id_profesional: "8",
                id_area_especialidad : "1"
            },{
                id: "9",
                id_profesional: "9",
                id_area_especialidad : "3"
            },{
                id: "10",
                id_profesional: "10",
                id_area_especialidad : "1"
            },{
                id: "11",
                id_profesional: "11",
                id_area_especialidad : "3"
            },{
            id: "12",
            id_profesional: "9",
            id_area_especialidad : "2"
        },{
            id: "13",
            id_profesional: "2",
            id_area_especialidad : "2"
        },
        ]);
    });
};
