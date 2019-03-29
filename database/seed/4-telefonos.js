exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('telefonos').del()
    .then(() => {
        // Inserts seed entries
        return knex('telefonos').insert([
            {
                id: "1",
                tipo: "CELULAR",
                numero:  "608 680",
                id_paciente: "1"
            },{
                id: "2",
                tipo: "FIJO",
                numero: "324 925",
                id_paciente: "3"

            },{
                id: "3",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "1"
            },{
                id: "4",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "4"

            },{
                id: "5",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "6"
            },{
                id: "6",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "8"
            },{
                id: "7",
                tipo: "CELULAR",
                numero:  "433",
                id_paciente: "9"
            },{
                id: "8",
                tipo: "FIJO",
                numero:  "789",
                id_paciente: "10"
            },{
                id: "9",
                tipo: "CELULAR",
                numero:  "417",
                id_paciente: "41"
            },{
                id: "10",
                tipo: "FIJO",
                numero:  "321",
                id_paciente: "10"
            },{
                id: "11",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "21"
            },{
                id: "12",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                id: "13",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "31"
            },{
                id: "14",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "41"
            },{
                id: "15",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "31"
            },{
                id: "16",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "31"
            },{
                id: "17",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "21"
            },{
                id: "18",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                id: "19",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "18"
            },{
                id: "20",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "7"
            },{
                id: "21",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "41"
            },{
                id: "22",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "21"
            },{
                id: "23",
                tipo: "CELULAR",
                numero:  "644",

                id_paciente: "10"
            },{
                id: "24",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                id: "25",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "12"
            },{
                id: "26",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "1"
            },{
                id: "27",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "1"
            },{
                id: "28",
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "12"
            },{
                id: "29",
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: '21'
            },{
                id: "30",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '21'

            },{
                id: "31",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '31'
            },{
                id: "32",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '32'

            },{
                id: "33",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '38'

            },{
                id: "34",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '31'

            },{
                id: "35",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '41'
            },{
                id: "36",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '2'

            },{
                id: "37",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '4'
            },{
                id: "38",
                tipo: "FIJO",
                numero: "743",
                id_paciente: '6'
            },{
                id: "39",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '9'
            },{
                id: "40",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '8'
            },{
                id: "41",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '10'

            },{
                id: "42",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '21'

            },{
                id: "43",
                tipo: "CELULAR",
                numero:  "479",
                id_paciente: '21'

            },{
                id: "44",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '29'

            },{
                id: "45",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '9'
            },{
                id: "46",
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '19'
            },{
                id: "47",
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '29'

            },{
                id: "48",
                tipo: "FIJO",
                id_paciente: '29'
            },{
                id: "49",
                numero:  "0343-4313449",
                id_paciente: '30'
            },{
                id: "50",
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '29'

            },{
                id: "51",
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '30'

            },{
                id: "52",
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '21'
            },{
                id: "53",
                tipo: "CELULAR",
                numero:  "0343-431448",
                id_paciente: '41'
            },{
                id: "54",
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '26'
            },{
                id: "55",
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '2'
            },{
                id: "56",
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '3'
            },{
                id: "57",
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '4'

            },{
                id: "58",
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '24'

            },{
                id: "59",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                id: "60",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                id: "61",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                id: "62",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                id: "63",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                id: "64",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'

            },{
                id: "65",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                id: "66",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '26'

            },{
                id: "67",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "31"
            },{
                id: "68",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "21"
            },{
                id: "69",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                id: "70",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "18"
            },{
                id: "71",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "38"
            },{
                id: "72",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "31"
            },{
                id: "73",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                id: "74",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "4"
            },{
                id: "75",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "1"
            },{
                id: "76",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                id: "77",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                id: "78",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '39'
            },{
                id: "79",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "7"
            },{
                id: "80",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'

            },{
                id: "81",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "19"
            },{
                id: "82",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "19"
            },{
                id: "83",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "18"
            },{
                id: "84",
                tipo: "FIJO",
                numero:  "0342-431341",
                id_paciente: "14"
            },{
                id: "85",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                id: "86",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "8"
            },{
                id: "87",
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "21"
            },{
                id: "88",
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "41"
            },
        ]);
    });
};