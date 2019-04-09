const bcrypt = require('bcrypt');

exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('usuarios').del()
    .then(() => {
        // Inserts seed entries
        return knex('usuarios').insert([
            {
                username: "emacana",
                password: bcrypt.hashSync ("administrador1",10),
                email: "ecanavesio@yopmail.com",
                id_rol: 1
            },{
                username: "fertep",
                password: bcrypt.hashSync ("administrador2",10),
                email: "fer.tep@yopmail.com",
                id_rol: 1
            },{
                username: "lorraine johnston",
                password: bcrypt.hashSync ("aisan",10),
                email: "lorraine.johnston@example.com",
                id_rol: 2
            },{
                username: "vivan gomez",
                password: bcrypt.hashSync ("muppet",10),
                email: "vivan.gomez@example.com",
                id_rol: 2
            },{
                username: "lola fuller",
                password: bcrypt.hashSync ("patriot",10),
                email: "lola.fuller@example.com",
                id_rol: 2
            },{
                username: "britney henry",
                password: bcrypt.hashSync ("818181",10),
                email: "britney.henry@example.com",
                id_rol: 4
            },{
                username: "donald matthews",
                password: bcrypt.hashSync ("ferguson",10),
                email: "donald.matthews@example.com",
                id_rol: 4
            },{
                username: "heidi hall",
                password: bcrypt.hashSync ("linda",10),
                email: "heidi.hall@example.com",
                id_rol: 4
            },{
                username: "valente silveira",
                password: bcrypt.hashSync ("madison1",10),
                email: "valente.silveira@example.com",
                id_rol: 4
            },{
                username: "leonore zorn",
                password: bcrypt.hashSync ("rochelle",10),
                email: "leonore.zorn@example.com",
                id_rol: 4
            },{
                username: "leonildo cardoso",
                password: bcrypt.hashSync ("donuts",10),
                email: "leonildo.cardoso@example.com",
                id_rol: 4
            },{
                username: "aarão fernandes",
                password: bcrypt.hashSync ("bailey",10),
                email: "aarão.fernandes@example.com",
                id_rol: 4
            },{
                username: "genesis west",
                password: bcrypt.hashSync ("future",10),
                email: "genesis.west@example.com",
                id_rol: 4
            },{
                username: "azélio nogueira",
                password: bcrypt.hashSync ("marlin",10),
                email: "azélio.nogueira@example.com",
                id_rol: 4
            },{
                username: "holly edwards",
                password: bcrypt.hashSync ("armstron",10),
                email: "holly.edwards@example.com",
                id_rol: 4
            },{
                username: "ivan calvo",
                password: bcrypt.hashSync ("cash",10),
                email: "ivan.calvo@example.com",
                id_rol: 4
            },{
                username: "blackkoala499",
                password: bcrypt.hashSync ("nathan1",10),
                email: "blake.brar@example.com",
                id_rol: 3
            },{
                username: "yellowpeacock980",
                password: bcrypt.hashSync ("kingfish",10),
                email: "adrian.sanz@example.com",
                id_rol: 3
            },{
                username: "crazyfrog951",
                password: bcrypt.hashSync ("penthous",10),
                email: "willard.kelley@example.com",
                id_rol: 3
            },{
                username: "purplerabbit290",
                password: bcrypt.hashSync ("atlantic",10),
                email: "maxime.grewal@example.com",
                id_rol: 3
            },{
                username: "smallswan447",
                password: bcrypt.hashSync ("rovers",10),
                email: "olivia.morales@example.com",
                id_rol: 3
            },{
                username: "crazymeercat685",
                password: bcrypt.hashSync ("zebra",10),
                email: "lucy.perrin@example.com",
                id_rol: 3
            },{
                username: "beautifulelephant522",
                password: bcrypt.hashSync ("roxy",10),
                email: "birgit.raith@example.com",
                id_rol: 3
            },{
                username: "blacksnake992",
                password: bcrypt.hashSync ("124578",10),
                email: "annabelle.mitchell@example.com",
                id_rol: 3
            },{
                username: "bigbutterfly178",
                password: bcrypt.hashSync ("theend",10),
                email: "ellie.fuller@example.com",
                id_rol: 3
            },{
                username: "redmeercat600",
                password: bcrypt.hashSync ("american",10),
                email: "alfredo.bailey@example.com",
                id_rol: 3
            },{
                username: "beautifulwolf968",
                password: bcrypt.hashSync ("jonathon",10),
                email: "stella.renaud@example.com",
                id_rol: 3
            },{
                username: "whitegoose431",
                password: bcrypt.hashSync ("grande",10),
                email: "adele.küster@example.com",
                id_rol: 3
            },{
                username: "blackleopard605",
                password: bcrypt.hashSync ("turnip",10),
                email: "walli.schuch@example.com",
                id_rol: 3
            },{
                username: "blackladybug122",
                password: bcrypt.hashSync ("sprinter",10),
                email: "gesche.hof@example.com",
                id_rol: 3
            },{
                username: "greenbird269",
                password: bcrypt.hashSync ("1234567890",10),
                email: "hermínio.jesus@example.com",
                id_rol: 3
            },{
                username: "crazydog459",
                password: bcrypt.hashSync ("thewho",10),
                email: "luis.andre@example.com",
                id_rol: 3
            },{
                username: "blackgorilla170",
                password: bcrypt.hashSync ("maggot",10),
                email: "andres.lozano@example.com",
                id_rol: 3
            },{
                username: "ticklishtiger664",
                password: bcrypt.hashSync ("bailey1",10),
                email: "joseph.ryan@example.com",
                id_rol: 3
            },{
                username: "yellowlion742",
                password: bcrypt.hashSync ("tomtom",10),
                email: "louison.muller@example.com",
                id_rol: 3
            },{
                username: "heavymeercat791",
                password: bcrypt.hashSync ("mason1",10),
                email: "cory.mitchelle@example.com",
                id_rol: 3
            },{
                username: "bluepanda767",
                password: bcrypt.hashSync ("sonoma",10),
                email: "abbie.powell@example.com",
                id_rol: 3
            },{
                username: "whitekoala554",
                password: bcrypt.hashSync ("frodo",10),
                email: "bobby.thompson@example.com",
                id_rol: 3
            },{
                username: "bluebear997",
                password: bcrypt.hashSync ("combat",10),
                email: "eddie.hill@example.com",
                id_rol: 3
            },{
                username: "crazyostrich315",
                password: bcrypt.hashSync ("corvet07",10),
                email: "angela.carstens@example.com",
                id_rol: 3
            },{
                username: "ticklishswan663",
                password: bcrypt.hashSync ("altoids",10),
                email: "jeanne.knight@example.com",
                id_rol: 3
            },{
                username: "redpeacock713",
                password: bcrypt.hashSync ("strange",10),
                email: "lester.sims@example.com",
                id_rol: 3
            },{
                username: "orangemeercat704",
                password: bcrypt.hashSync ("ricky",10),
                email: "blanca.delgado@example.com",
                id_rol: 3
            },{
                username: "bigsnake903",
                password: bcrypt.hashSync ("paddle",10),
                email: "reginald.berry@example.com",
                id_rol: 3
            },{
                username: "purplerabbit142",
                password: bcrypt.hashSync ("5678",10),
                email: "juliette.taylor@example.com",
                id_rol: 3
            },{
                username: "blackpanda151",
                password: bcrypt.hashSync ("picture",10),
                email: "sifredo.carvalho@example.com",
                id_rol: 3
            },{
                username: "beautifulwolf769",
                password: bcrypt.hashSync ("freak",10),
                email: "jesus.esteban@example.com",
                id_rol: 3
            },{
                username: "sadfrog402",
                password: bcrypt.hashSync ("nipper",10),
                email: "sophia.chan@example.com",
                id_rol: 3
            },{
                username: "redkoala565",
                password: bcrypt.hashSync ("6666666",10),
                email: "alexis.carr@example.com",
                id_rol: 3
            },{
                username: "bigrabbit436",
                password: bcrypt.hashSync ("spunk",10),
                email: "angeles.diaz@example.com",
                id_rol: 3
            },{
                username: "silverdog344",
                password: bcrypt.hashSync ("charlott",10),
                email: "mildred.sanders@example.com",
                id_rol: 3
            },{
                username: "greenbird502",
                password: bcrypt.hashSync ("goldwing",10),
                email: "clemêncio.pinto@example.com",
                id_rol: 3
            },{
                username: "ticklishfish644",
                password: bcrypt.hashSync ("purdue",10),
                email: "terezinha.moura@example.com",
                id_rol: 3
            },{
                username: "blackkoala646",
                password: bcrypt.hashSync ("sucks",10),
                email: "artur.erhardt@example.com",
                id_rol: 3
            },{
                username: "organicduck863",
                password: bcrypt.hashSync ("hemlock",10),
                email: "rose.soto@example.com",
                id_rol: 3
            },{
                username: "bluegorilla501",
                password: bcrypt.hashSync ("castle",10),
                email: "mathis.gill@example.com",
                id_rol: 3
            },{
                username: "ticklishpeacock513",
                password: bcrypt.hashSync ("bruins",10),
                email: "lison.mathieu@example.com",
                id_rol: 3
            },{
                username: "purplesnake548",
                password: bcrypt.hashSync ("lillian",10),
                email: "hans-günther.heinicke@example.com",
                id_rol: 3
            },{
                username: "tinybear979",
                password: bcrypt.hashSync ("bugger",10),
                email: "bernardino.cavalcanti@example.com",
                id_rol: 3
            },{
                username: "happylion901",
                password: bcrypt.hashSync ("1a2b3c4d",10),
                email: "tatiana.dias@example.com",
                id_rol: 3
            }
        ]);
    });
};