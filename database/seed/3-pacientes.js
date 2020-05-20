exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('pacientes').del()
    .then(() => {
        // Inserts seed entries
        return knex('pacientes').insert([
            {
                documento: 386,
                nombre: "blake",
                apellido: "brar",
                fecha_nacimiento: "1954-8-26",
                telefono: '342-4462',
                direccion: { 
                    calle: "",
                    numero: "9569",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 17
            },{
                documento: 60239499,
                nombre: "adrian",
                apellido: "sanz",
                fecha_nacimiento: "1956-7-26",
                telefono: '342-44463',
                direccion: { 
                    calle: "calle mota",
                    numero: "6094",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 18
            },{
                documento: 626366,
                nombre: "willard",
                apellido: "kelley",
                fecha_nacimiento: "1981-3-3",
                telefono: '342-74463',
                direccion: { 
                    calle: "homestead rd",
                    numero: "1686",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 19
            },{
                documento: 231627,
                nombre: "maxime",
                apellido: "grewal",
                fecha_nacimiento: "1987-4-17",
                telefono: '342-64423',
                direccion: { 
                    calle: "elgin st",
                    numero: "520",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 20
            },{
                documento: 41812,
                nombre: "olivia",
                apellido: "morales",
                fecha_nacimiento: "1973-11-1",
                telefono: '342-677221',
                direccion: { 
                    calle: "miller ave",
                    numero: "1357",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 21
            },{
                documento: 7973,
                nombre: "lucy",
                apellido: "perrin",
                fecha_nacimiento: "1957-5-18",
                telefono: '342-646893',
                direccion: { 
                    calle: "rue des abbesses",
                    numero: "9849",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 22
            },{
                documento: 942,
                nombre: "birgit",
                apellido: "raith",
                fecha_nacimiento: "1951-1-3",
                telefono: '342-678779',
                direccion: { 
                    calle: "talstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 23
            },{
                documento: 4477839,
                nombre: "annabelle",
                apellido: "mitchell",
                fecha_nacimiento: "1967-7-22",
                telefono: '342-677891',
                direccion: { 
                    calle: "queen st",
                    numero: "7687",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 24
            },{
                documento: 123,
                nombre: "ellie",
                apellido: "fuller",
                fecha_nacimiento: "1986-5-26",
                telefono: '342-466797',
                direccion: { 
                    calle: "grange road",
                    numero: "2726",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 25
            },{
                documento: 88272,
                nombre: "alfredo",
                apellido: "bailey",
                fecha_nacimiento: "1953-3-1",
                telefono: '342-424164',
                direccion: { 
                    calle: "lakeview st",
                    numero: "5470",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 26
            },{
                documento: 211252,
                nombre: "stella",
                apellido: "renaud",
                fecha_nacimiento: "1957-7-14",
                telefono: '342-677897',
                direccion: { 
                    calle: "rue de l'abbé-de-l'épée",
                    numero: "3698",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 27
            },{
                documento: 7477,
                nombre: "adele",
                apellido: "küster",
                fecha_nacimiento: "1950-10-23",
                telefono: '342-6777791',
                direccion: { 
                    calle: "kirchplatz",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 28
            },{
                documento: 123978,
                nombre: "walli",
                apellido: "schuch",
                fecha_nacimiento: "1965-9-18",
                telefono: '342-64799721',
                direccion: { 
                    calle: "schulstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 29
            },{
                documento: 299,
                nombre: "gesche",
                apellido: "hof",
                fecha_nacimiento: "1945-10-4",
                telefono: '343-6879312',
                direccion: { 
                    calle: "tulpenweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 30
            },{
                documento: 250,
                nombre: "hermínio",
                apellido: "jesus",
                fecha_nacimiento: "1975-5-11",
                telefono: '342-4313237',
                direccion: { 
                    calle: "rua sete de setembro",
                    numero: "6645",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 31
            },{
                documento: 144156,
                nombre: "luis",
                apellido: "andre",
                fecha_nacimiento: "1952-11-22",
                telefono: '343-4717664',
                direccion: { 
                    calle: "rue des chartreux",
                    numero: "672",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 32
            },{
                documento: 417793,
                nombre: "andres",
                apellido: "lozano",
                fecha_nacimiento: "1962-4-12",
                telefono: '342-4677693',
                direccion: { 
                    calle: "calle mota",
                    numero: "6329",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 33
            },{
                documento: 379,
                nombre: "joseph",
                apellido: "ryan",
                fecha_nacimiento: "1947-5-15",
                telefono: '342-4212973',
                direccion: { 
                    calle: "e pecan st",
                    numero: "124",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 34
            },{
                documento: 127483534,
                nombre: "louison",
                apellido: "muller",
                fecha_nacimiento: "1993-9-8",
                telefono: '342-4311231',
                direccion: { 
                    calle: "esplanade du",
                    numero: "9888",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 35
            },{
                documento: 30123321,
                nombre: "cory",
                apellido: "mitchelle",
                fecha_nacimiento: "1995-3-25",
                telefono: '342-6799443',
                direccion: { 
                    calle: "queen street",
                    numero: "5882",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 36
            },{
                documento: 31712214,
                nombre: "abbie",
                apellido: "powell",
                fecha_nacimiento: "1960-8-23",
                telefono: '342-6977883',
                direccion: { 
                    calle: "the avenue",
                    numero: "9732",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 37
            },{
                documento: 123321,
                nombre: "bobby",
                apellido: "thompson",
                fecha_nacimiento: "1978-10-31",
                telefono: '342-877673',
                direccion: { 
                    calle: "oak lawn ave",
                    numero: "2080",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 38
            },{
                documento: 32944,
                nombre: "eddie",
                apellido: "hill",
                fecha_nacimiento: "1980-9-14",
                telefono: '343-4311474',
                direccion: { 
                    calle: "preston rd",
                    numero: "9350",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 39
            },{
                documento: 983226,
                nombre: "angela",
                apellido: "carstens",
                fecha_nacimiento: "1951-3-19",
                telefono: '342-6977993',
                direccion: { 
                    calle: "waldweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 40
            },{
                documento: 862234,
                nombre: "jeanne",
                apellido: "knight",
                fecha_nacimiento: "1985-3-26",
                telefono: '342-6977237',
                direccion: { 
                    calle: "grand ave",
                    numero: "7953",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 41
            },{
                documento: 76028,
                nombre: "lester",
                apellido: "sims",
                fecha_nacimiento: "1951-4-15",
                telefono: '342-4723212',
                direccion: { 
                    calle: "shady ln dr",
                    numero: "5054",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 42
            },{
                documento: 2651106,
                nombre: "blanca",
                apellido: "delgado",
                fecha_nacimiento: "1960-7-15",
                telefono: '342-4877891',
                direccion: { 
                    calle: "calle de arturo soria",
                    numero: "1149",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 43
            },{
                documento: 88658,              
                nombre: "reginald",
                apellido: "berry",
                fecha_nacimiento: "1965-1-7",
                telefono: '343-6677991',
                direccion: { 
                    calle: "oak ridge ln",
                    numero: "4330",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 44
            },{
                documento: 7480,
                nombre: "juliette",
                apellido: "taylor",
                fecha_nacimiento: "1968-10-22",
                telefono: '343-6766771',
                direccion: { 
                    calle: "peel st",
                    numero: "5320",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 45
            },{
                documento: 4142,
                nombre: "sifredo",
                apellido: "carvalho",
                fecha_nacimiento: "1974-11-26",
                telefono: '343-4677992',
                direccion: { 
                    calle: "rua treze de maio",
                    numero: "1542",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 46
            },{
                documento: 94162682,
                nombre: "jesus",
                apellido: "esteban",
                fecha_nacimiento: "1959-7-13",
                telefono: '343-4677991',
                direccion: { 
                    calle: "calle covadonga",
                    numero: "9725",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 47
            },{
                documento: 46228,
                nombre: "sophia",
                apellido: "chan",
                fecha_nacimiento: "1975-2-7",
                telefono: '343-4722113',
                direccion: { 
                    calle: "disputed rd",
                    numero: "8213",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 48
            },{
                documento: 637624481,
                nombre: "alexis",
                apellido: "carr",
                fecha_nacimiento: "1957-1-29",
                direccion: { 
                    calle: "adams st",
                    numero: "4781",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 49
            },{
                documento: 7307402,
                nombre: "angeles",
                apellido: "diaz",
                fecha_nacimiento: "1952-11-5",
                telefono: '342-4877271',
                direccion: { 
                    calle: "calle del prado",
                    numero: "2198",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 50
            },{
                documento: 86426,
                nombre: "mildred",
                apellido: "sanders",
                fecha_nacimiento: "1949-10-7",
                telefono: '342-4977114',
                direccion: { 
                    calle: "lovers ln",
                    numero: "7842",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 51
            },{
                documento: 6368,
                nombre: "clemêncio",
                apellido: "pinto",
                fecha_nacimiento: "1978-4-10",
                telefono: '342-6977973',
                direccion: { 
                    calle: "rua são sebastiao",
                    numero: "5765",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 52
            },{
                documento: 66133952,
                nombre: "terezinha",
                apellido: "moura",
                fecha_nacimiento: "1971-4-17",
                telefono: '342-4977661',
                direccion: { 
                    calle: "rua são francisco",
                    numero: "3201",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 53
            },{
                documento: 94018,
                nombre: "artur",
                apellido: "erhardt",
                fecha_nacimiento: "1948-4-27",
                telefono: '343-4313772',
                direccion: { 
                    calle: "tulpenweg",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 54
            },{
                documento: 619164,
                nombre: "rose",
                apellido: "soto",
                fecha_nacimiento: "1946-12-25",
                telefono: '342-4977671',
                direccion: { 
                    calle: "cackson st",
                    numero: "4900",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 55
            },{
                documento: 8870,
                nombre: "mathis",
                apellido: "gill",
                fecha_nacimiento: "1983-2-8",
                telefono: '343-6211443',
                direccion: { 
                    calle: "wellington st",
                    numero: "2320",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 56
            },{
                documento: 2836,
                nombre: "lison",
                apellido: "mathieu",
                fecha_nacimiento: "1947-1-16",
                telefono: '342-4977993',
                direccion: { 
                    calle: "place de l'abbé-jean-lebeuf",
                    numero: "6282",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 57
            },{
                documento: 852538,
                nombre: "hans-günther",
                apellido: "heinicke",
                fecha_nacimiento: "1964-12-21",
                telefono: '343-677661',
                direccion: { 
                    calle: "schillerstraße",
                    numero: "",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 58
            },{
                documento: 908576,
                nombre: "bernardino",
                apellido: "cavalcanti",
                fecha_nacimiento: "1969-3-20",
                telefono: '343-797981',
                direccion: { 
                    calle: "rua piauí",
                    numero: "3259",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 59
            },{
                documento: 398451,
                nombre: "tatiana",
                apellido: "dias",
                fecha_nacimiento: "1989-1-2",
                telefono: '342-4313731',
                direccion: { 
                    calle: "rua onze",
                    numero: "2143",
                    piso: "",
                    departamento: ""
                },
                id_usuario: 60
            }
        ])
    })
}