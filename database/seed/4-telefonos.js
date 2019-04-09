exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('telefonos').del()
    .then(() => {
        // Inserts seed entries
        return knex('telefonos').insert([
            {
                tipo: "CELULAR",
                numero:  "608 680",
                id_paciente: "1"
            },{
                tipo: "FIJO",
                numero: "324 925",
                id_paciente: "3"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "1"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "4"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "6"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "8"
            },{
                tipo: "CELULAR",
                numero:  "433",
                id_paciente: "9"
            },{
                tipo: "FIJO",
                numero:  "789",
                id_paciente: "10"
            },{
                tipo: "CELULAR",
                numero:  "417",
                id_paciente: "41"
            },{
                tipo: "FIJO",
                numero:  "321",
                id_paciente: "10"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "21"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "31"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "41"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "31"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "31"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "21"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "18"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "7"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "41"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "21"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "10"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "18"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "12"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "1"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: "1"
            },{
                tipo: "FIJO",
                numero:  "644",
                id_paciente: "12"
            },{
                tipo: "CELULAR",
                numero:  "644",
                id_paciente: '21'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '21'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '31'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '32'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '38'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '31'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '41'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '2'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '4'
            },{
                tipo: "FIJO",
                numero: "743",
                id_paciente: '6'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '9'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '8'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '10'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '21'
            },{
                tipo: "CELULAR",
                numero:  "479",
                id_paciente: '21'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '29'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '9'
            },{
                tipo: "FIJO",
                numero:  "743",
                id_paciente: '19'
            },{
                tipo: "CELULAR",
                numero:  "743",
                id_paciente: '29'
            },{
                tipo: "FIJO",
                id_paciente: '29'
            },{
                numero:  "0343-4313449",
                id_paciente: '30'
            },{
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '29'
            },{
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '30'
            },{
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '21'
            },{
                tipo: "CELULAR",
                numero:  "0343-431448",
                id_paciente: '41'
            },{
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '26'
            },{
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '2'
            },{
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '3'
            },{
                tipo: "CELULAR",
                numero:  "0343-4313449",
                id_paciente: '4'
            },{
                tipo: "FIJO",
                numero:  "0343-4313449",
                id_paciente: '24'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '21'
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '26'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "31"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "21"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "18"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "38"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "31"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "4"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "1"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: '31'
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '39'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "7"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: '41'
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "19"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "19"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "18"
            },{
                tipo: "FIJO",
                numero:  "0342-431341",
                id_paciente: "14"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "12"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "8"
            },{
                tipo: "CELULAR",
                numero:  "0342-4313441",
                id_paciente: "21"
            },{
                tipo: "FIJO",
                numero:  "0342-4313441",
                id_paciente: "41"
            }
        ]);
    });
};