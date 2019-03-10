exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('obras_sociales_pacientes').del()
    .then(() => {
        // Inserts seed entries
        return knex('obras_sociales_pacientes').insert([
            {
                id: 1,
                id_obra_social: 10,
                id_paciente: 1,
                numero_afiliado: "Z5633733",
                activo: 1
            },{
                id: 2,
                id_obra_social: 11,
                id_paciente: 2,
                numero_afiliado: "70469428",
                activo: 1
            },{
                id: 3,
                id_obra_social: 10,
                id_paciente: 3,
                numero_afiliado: "P40130BV",
                activo: 1
            },{
                id: 4,
                id_obra_social: 9,
                id_paciente: 4,
                numero_afiliado: "A7927V66",
                activo: 1
            },{
                id: 5,
                id_obra_social: 11,
                id_paciente: 5,
                numero_afiliado: "M9M1AO8O",
                activo: 1
            },{
                id: 6,
                id_obra_social: 12,
                id_paciente: 6,
                numero_afiliado: "23Q62E3I",
                activo: 1
            },{
                id: 7,
                id_obra_social: 3,
                id_paciente: 7,
                numero_afiliado: "4GQ22004",
                activo: 1
            },{
                id: 8,
                id_obra_social: 1,
                id_paciente: 8,
                numero_afiliado: "0OX919S8",
                activo: 1
            },{
                id: 9,
                id_obra_social: 2,
                id_paciente: 9,
                numero_afiliado: "BMZ2FU08",
                activo: 1
            },{
                id: 10,
                id_obra_social: 12,
                id_paciente: 10,
                numero_afiliado: "SD0CQB13",
                activo: 1
            },{
                id: 11,
                id_obra_social: 10,
                id_paciente: 11,
                numero_afiliado: "89B73C82",
                activo: 1
            },{
                id: 12,
                id_obra_social: 1,
                id_paciente: 12,
                numero_afiliado: "0Y9535Q9",
                activo: 1
            },{
                id: 13,
                id_obra_social: 4,
                id_paciente: 13,
                numero_afiliado: "E13509O9",
                activo: 1
            },{
                id: 14,
                id_obra_social: 13,
                id_paciente: 14,
                numero_afiliado: "933W7317",
                activo: 1
            },{
                id: 15,
                id_obra_social: 9,
                id_paciente: 15,
                numero_afiliado: "8319V0S8",
                activo: 1
            },{
                id: 16,
                id_obra_social: 5,
                id_paciente: 16,
                numero_afiliado: "0DDR3714",
                activo: 1
            },{
                id: 17,
                id_obra_social: 4,
                id_paciente: 17,
                numero_afiliado: "NG7E4285",
                activo: 1
            },{
                id: 18,
                id_obra_social: 2,
                id_paciente: 18,
                numero_afiliado: "97K475I6",
                activo: 1
            },{
                id: 19,
                id_obra_social: 12,
                id_paciente: 19,
                numero_afiliado: "65640N6A",
                activo: 1
            },{
                id: 20,
                id_obra_social: 2,
                id_paciente: 20,
                numero_afiliado: "P8UUZ877",
                activo: 1
            },{
                id: 21,
                id_obra_social: 5,
                id_paciente: 21,
                numero_afiliado: "80X897O6",
                activo: 1
            },{
                id: 22,
                id_obra_social: 1,
                id_paciente: 22,
                numero_afiliado: "4TOY2WY6",
                activo: 1
            },{
                id: 23,
                id_obra_social: 2,
                id_paciente: 23,
                numero_afiliado: "7L9063CC",
                activo: 1
            },{
                id: 24,
                id_obra_social: 5,
                id_paciente: 24,
                numero_afiliado: "8421642S",
                activo: 1
            },{
                id: 25,
                id_obra_social: 11,
                id_paciente: 25,
                numero_afiliado: "9J4QQ629",
                activo: 1
            },{
                id: 26,
                id_obra_social: 2,
                id_paciente: 26,
                numero_afiliado: "13Z386T6",
                activo: 1
            },{
                id: 27,
                id_obra_social: 12,
                id_paciente: 27,
                numero_afiliado: "85Q23523",
                activo: 1
            },{
                id: 28,
                id_obra_social: 11,
                id_paciente: 28,
                numero_afiliado: "77T83039",
                activo: 1
            },{
                id: 29,
                id_obra_social: 6,
                id_paciente: 29,
                numero_afiliado: "O9V58798",
                activo: 1
            },{
                id: 30,
                id_obra_social: 4,
                id_paciente: 30,
                numero_afiliado: "VZ608312",
                activo: 1
            },{
                id: 31,
                id_obra_social: 2,
                id_paciente: 31,
                numero_afiliado: "K38592BO",
                activo: 1
            },{
                id: 32,
                id_obra_social: 10,
                id_paciente: 32,
                numero_afiliado: "8457N1PD",
                activo: 1
            },{
                id: 33,
                id_obra_social: 5,
                id_paciente: 33,
                numero_afiliado: "N684Q4SW",
                activo: 1
            },{
                id: 34,
                id_obra_social: 12,
                id_paciente: 34,
                numero_afiliado: "9O16998K",
                activo: 1
            },{
                id: 35,
                id_obra_social: 13,
                id_paciente: 35,
                numero_afiliado: "U675N7R4",
                activo: 1
            },{
                id: 36,
                id_obra_social: 3,
                id_paciente: 36,
                numero_afiliado: "Z40SL41T",
                activo: 1
            },{
                id: 37,
                id_obra_social: 3,
                id_paciente: 37,
                numero_afiliado: "Y9844X9B",
                activo: 1
            },{
                id: 38,
                id_obra_social: 9,
                id_paciente: 38,
                numero_afiliado: "2KU43602",
                activo: 1
            },{
                id: 39,
                id_obra_social: 9,
                id_paciente: 39,
                numero_afiliado: "9420F90C",
                activo: 1
            },{
                id: 40,
                id_obra_social: 11,
                id_paciente: 40,
                numero_afiliado: "52111N92",
                activo: 1
            },{
                id: 41,
                id_obra_social: 4,
                id_paciente: 41,
                numero_afiliado: "R1F92004",
                activo: 1
            },{
                id: 42,
                id_obra_social: 8,
                id_paciente: 42,
                numero_afiliado: "3ZY920Y8",
                activo: 1
            },{
                id: 43,
                id_obra_social: 1,
                id_paciente: 43,
                numero_afiliado: "62E48VGA",
                activo: 1
            },{
                id: 44,
                id_obra_social: 8,
                id_paciente: 44,
                numero_afiliado: "21093636",
                activo: 1
            },{
                id: 45,
                id_obra_social: 1,
                id_paciente: 26,
                numero_afiliado: "736F200B",
                activo: 1
            },{
                id: 46,
                id_obra_social: 8,
                id_paciente: 8,
                numero_afiliado: "B79409O8",
                activo: 1
            },{
                id: 47,
                id_obra_social: 6,
                id_paciente: 5,
                numero_afiliado: "73Y37A29",
                activo: 1
            },{
                id: 48,
                id_obra_social: 2,
                id_paciente: 29,
                numero_afiliado: "P04460M0",
                activo: 1
            },{
                id: 49,
                id_obra_social: 5,
                id_paciente: 16,
                numero_afiliado: "81E78N77",
                activo: 1
            },{
                id: 50,
                id_obra_social: 7,
                id_paciente: 35,
                numero_afiliado: "7H548T1Y",
                activo: 1
            },{
                id: 51,
                id_obra_social: 8,
                id_paciente: 43,
                numero_afiliado: "43J75YH2",
                activo: 1
            },{
                id: 52,
                id_obra_social: 13,
                id_paciente: 15,
                numero_afiliado: "TH202C86",
                activo: 1
            },{
                id: 53,
                id_obra_social: 7,
                id_paciente: 24,
                numero_afiliado: "Q231818H",
                activo: 1
            },{
                id: 54,
                id_obra_social: 9,
                id_paciente: 25,
                numero_afiliado: "UY9YL258",
                activo: 1
            },
        ])
    })
}
