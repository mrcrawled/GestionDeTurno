exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('telefonos_pacientes').del()
    .then(() => {
        // Inserts seed entries
        return knex('telefonos_pacientes').insert([
            {
                id: "1",
                id_telefono: "1",
                id_paciente: "1",
                activo: "true",
            },{
                id: "2",
                id_telefono: "2",
                id_paciente: "1",
                activo: "true",
            },{
                id: "3",
                id_telefono: "3",
                id_paciente: "2",
                activo: "true",
            },{
                id: "4",
                id_telefono: "4",
                id_paciente: "2",
                activo: "true",
            },{
                id: "5",
                id_telefono: "5",
                id_paciente: "3",
                activo: "true",
            },{
                id: "6",
                id_telefono: "6",
                id_paciente: "3",
                activo: "true",
            },{
                id: "7",
                id_telefono: "7",
                id_paciente: "4",
                activo: "false",
            },{
                id: "8",
                id_telefono: "8",
                id_paciente: "4",
                activo: "true",
            },{
                id: "9",
                id_telefono: "9",
                id_paciente: "5",
                activo: "false",
            },{
                id: "10",
                id_telefono: "10",
                id_paciente: "5",
                activo: "false",
            },{
                id: "11",
                id_telefono: "11",
                id_paciente: "6",
                activo: "true",
            },{
                id: "12",
                id_telefono: "12",
                id_paciente: "6",
                activo: "true",
            },{
                id: "13",
                id_telefono: "13",
                id_paciente: "7",
                activo: "false",
            },{
                id: "14",
                id_telefono: "14",
                id_paciente: "7",
                activo: "true",
            },{
                id: "15",
                id_telefono: "15",
                id_paciente: "8",
                activo: "false",
            },{
                id: "16",
                id_telefono: "16",
                id_paciente: "8",
                activo: "true",
            },{
                id: "17",
                id_telefono: "17",
                id_paciente: "9",
                activo: "false",
            },{
                id: "18",
                id_telefono: "18",
                id_paciente: "9",
                activo: "false",
            },{
                id: "19",
                id_telefono: "19",
                id_paciente: "10",
                activo: "true",
            },{
                id: "20",
                id_telefono: "20",
                id_paciente: "10",
                activo: "true",
            },{
                id: "21",
                id_telefono: "21",
                id_paciente: "11",
                activo: "false",
            },{
                id: "22",
                id_telefono: "22",
                id_paciente: "11",
                activo: "true",
            },{
                id: "23",
                id_telefono: "23",
                id_paciente: "12",
                activo: "true",
            },{
                id: "24",
                id_telefono: "24",
                id_paciente: "12",
                activo: "false",
            },{
                id: "25",
                id_telefono: "25",
                id_paciente: "13",
                activo: "false",
            },{
                id: "26",
                id_telefono: "26",
                id_paciente: "13",
                activo: "true",
            },{
                id: "27",
                id_telefono: "27",
                id_paciente: "14",
                activo: "true",
            },{
                id: "28",
                id_telefono: "28",
                id_paciente: "14",
                activo: "false",
            },{
                id: "29",
                id_telefono: "29",
                id_paciente: "15",
                activo: "false",
            },{
                id: "30",
                id_telefono: "30",
                id_paciente: "15",
                activo: "false",
            },{
                id: "31",
                id_telefono: "31",
                id_paciente: "16",
                activo: "false",
            },{
                id: "32",
                id_telefono: "32",
                id_paciente: "16",
                activo: "true",
            },{
                id: "33",
                id_telefono: "33",
                id_paciente: "17",
                activo: "false",
            },{
                id: "34",
                id_telefono: "34",
                id_paciente: "17",
                activo: "false",
            },{
                id: "35",
                id_telefono: "35",
                id_paciente: "18",
                activo: "true",
            },{
                id: "36",
                id_telefono: "36",
                id_paciente: "18",
                activo: "false",
            },{
                id: "37",
                id_telefono: "37",
                id_paciente: "19",
                activo: "true",
            },{
                id: "38",
                id_telefono: "38",
                id_paciente: "19",
                activo: "true",
            },{
                id: "39",
                id_telefono: "39",
                id_paciente: "20",
                activo: "true",
            },{
                id: "40",
                id_telefono: "40",
                id_paciente: "20",
                activo: "true",
            },{
                id: "41",
                id_telefono: "41",
                id_paciente: "21",
                activo: "true",
            },{
                id: "42",
                id_telefono: "42",
                id_paciente: "21",
                activo: "true",
            },{
                id: "43",
                id_telefono: "43",
                id_paciente: "22",
                activo: "true",
            },{
                id: "44",
                id_telefono: "44",
                id_paciente: "22",
                activo: "false",
            },{
                id: "45",
                id_telefono: "45",
                id_paciente: "23",
                activo: "true",
            },{
                id: "46",
                id_telefono: "46",
                id_paciente: "23",
                activo: "true",
            },{
                id: "47",
                id_telefono: "47",
                id_paciente: "24",
                activo: "true",
            },{
                id: "48",
                id_telefono: "48",
                id_paciente: "24",
                activo: "true",
            },{
                id: "49",
                id_telefono: "49",
                id_paciente: "25",
                activo: "true",
            },{
                id: "50",
                id_telefono: "50",
                id_paciente: "25",
                activo: "true",
            },{
                id: "51",
                id_telefono: "51",
                id_paciente: "26",
                activo: "true",
            },{
                id: "52",
                id_telefono: "52",
                id_paciente: "26",
                activo: "true",
            },{
                id: "53",
                id_telefono: "53",
                id_paciente: "27",
                activo: "true",
            },{
                id: "54",
                id_telefono: "54",
                id_paciente: "27",
                activo: "false",
            },{
                id: "55",
                id_telefono: "55",
                id_paciente: "28",
                activo: "false",
            },{
                id: "56",
                id_telefono: "56",
                id_paciente: "28",
                activo: "false",
            },{
                id: "57",
                id_telefono: "57",
                id_paciente: "29",
                activo: "true",
            },{
                id: "58",
                id_telefono: "58",
                id_paciente: "29",
                activo: "false",
            },{
                id: "59",
                id_telefono: "59",
                id_paciente: "30",
                activo: "false",
            },{
                id: "60",
                id_telefono: "60",
                id_paciente: "30",
                activo: "true",
            },{
                id: "61",
                id_telefono: "61",
                id_paciente: "31",
                activo: "false",
            },{
                id: "62",
                id_telefono: "62",
                id_paciente: "31",
                activo: "true",
            },{
                id: "63",
                id_telefono: "63",
                id_paciente: "32",
                activo: "true",
            },{
                id: "64",
                id_telefono: "64",
                id_paciente: "32",
                activo: "true",
            },{
                id: "65",
                id_telefono: "65",
                id_paciente: "33",
                activo: "true",
            },{
                id: "66",
                id_telefono: "66",
                id_paciente: "33",
                activo: "true",
            },{
                id: "67",
                id_telefono: "67",
                id_paciente: "34",
                activo: "false",
            },{
                id: "68",
                id_telefono: "68",
                id_paciente: "34",
                activo: "false",
            },{
                id: "69",
                id_telefono: "69",
                id_paciente: "35",
                activo: "false",
            },{
                id: "70",
                id_telefono: "70",
                id_paciente: "35",
                activo: "false",
            },{
                id: "71",
                id_telefono: "71",
                id_paciente: "36",
                activo: "true",
            },{
                id: "72",
                id_telefono: "72",
                id_paciente: "36",
                activo: "true",
            },{
                id: "73",
                id_telefono: "73",
                id_paciente: "37",
                activo: "false",
            },{
                id: "74",
                id_telefono: "74",
                id_paciente: "37",
                activo: "true",
            },{
                id: "75",
                id_telefono: "75",
                id_paciente: "38",
                activo: "true",
            },{
                id: "76",
                id_telefono: "76",
                id_paciente: "38",
                activo: "true",
            },{
                id: "77",
                id_telefono: "77",
                id_paciente: "39",
                activo: "true",
            },{
                id: "78",
                id_telefono: "78",
                id_paciente: "39",
                activo: "false",
            },{
                id: "79",
                id_telefono: "79",
                id_paciente: "40",
                activo: "true",
            },{
                id: "80",
                id_telefono: "80",
                id_paciente: "40",
                activo: "false",
            },{
                id: "81",
                id_telefono: "81",
                id_paciente: "41",
                activo: "true",
            },{
                id: "82",
                id_telefono: "82",
                id_paciente: "41",
                activo: "true",
            },{
                id: "83",
                id_telefono: "83",
                id_paciente: "42",
                activo: "false",
            },{
                id: "84",
                id_telefono: "84",
                id_paciente: "42",
                activo: "false",
            },{
                id: "85",
                id_telefono: "85",
                id_paciente: "43",
                activo: "true",
            },{
                id: "86",
                id_telefono: "86",
                id_paciente: "43",
                activo: "false",
            },{
                id: "87",
                id_telefono: "87",
                id_paciente: "44",
                activo: "true",
            },{
                id: "88",
                id_telefono: "88",
                id_paciente: "44",
                activo: "true",
            },
        ]);
    });
};