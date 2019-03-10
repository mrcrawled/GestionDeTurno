exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('telefonos').del()
    .then(() => {
        // Inserts seed entries
        return knex('telefonos').insert([
            {
                id: "1",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "608",
                    prefijo: "680",
                    numero_linea: "9302",
                }
            },{
                id: "2",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "324",
                    prefijo: "081",
                    numero_linea: "3925",
                }
            },{
                id: "3",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "644",
                    prefijo: "616",
                    numero_linea: "013",
                }
            },{
                id: "4",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "975",
                    prefijo: "459",
                    numero_linea: "174",
                }
            },{
                id: "5",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0489",
                    prefijo: "789",
                    numero_linea: "740",
                }
            },{
                id: "6",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "02",
                    prefijo: "2042",
                    numero_linea: "1672",
                }
            },{
                id: "7",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "443",
                    prefijo: "183",
                    numero_linea: "2444",
                }
            },{
                id: "8",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "059",
                    prefijo: "570",
                    numero_linea: "7175",
                }
            },{
                id: "9",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0425",
                    prefijo: "178",
                    numero_linea: "450",
                }
            },{
                id: "10",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "05",
                    prefijo: "1652",
                    numero_linea: "6509",
                }
            },{
                id: "11",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "20",
                    prefijo: "96",
                    numero_linea: "86",
                }
            },{
                id: "12",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "43",
                    prefijo: "11",
                    numero_linea: "80",
                }
            },{
                id: "13",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0172",
                    numero_linea: "9506364",
                }
            },{
                id: "14",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0399",
                    numero_linea: "0758521",
                }
            },{
                id: "15",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "697",
                    prefijo: "826",
                    numero_linea: "0347",
                }
            },{
                id: "16",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "438",
                    prefijo: "742",
                    numero_linea: "2859",
                }
            },{
                id: "17",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0757",
                    prefijo: "917",
                    numero_linea: "806",
                }
            },{
                id: "18",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "015394",
                    numero_linea: "66582",
                }
            },{
                id: "19",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "370",
                    prefijo: "840",
                    numero_linea: "0993",
                }
            },{
                id: "20",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "059",
                    prefijo: "075",
                    numero_linea: "0908",
                }
            },{
                id: "21",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "44",
                    prefijo: "91",
                    numero_linea: "56",
                }
            },{
                id: "22",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "88",
                    prefijo: "37",
                    numero_linea: "98",
                }
            },{
                id: "23",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0177",
                    numero_linea: "4852754",
                }
            },{
                id: "24",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0640",
                    numero_linea: "4543192",
                }
            },{
                id: "25",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0172",
                    numero_linea: "3381089",
                }
            },{
                id: "26",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0591",
                    numero_linea: "8420222",
                }
            },{
                id: "27",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0176",
                    numero_linea: "7980230",
                }
            },{
                id: "28",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0912",
                    numero_linea: "7932946",
                }
            },{
                id: "29",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "29",
                    prefijo: "9612",
                    numero_linea: "1983",
                }
            },{
                id: "30",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "25",
                    prefijo: "5813",
                    numero_linea: "9278",
                }
            },{
                id: "31",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "55",
                    prefijo: "41",
                    numero_linea: "37",
                }
            },{
                id: "32",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "99",
                    prefijo: "57",
                    numero_linea: "00",
                }
            },{
                id: "33",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "659",
                    prefijo: "081",
                    numero_linea: "374",
                }
            },{
                id: "34",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "962",
                    prefijo: "384",
                    numero_linea: "544",
                }
            },{
                id: "35",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "424",
                    prefijo: "170",
                    numero_linea: "9640",
                }
            },{
                id: "36",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "686",
                    prefijo: "948",
                    numero_linea: "3255",
                }
            },{
                id: "37",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "94",
                    prefijo: "50",
                    numero_linea: "26",
                }
            },{
                id: "38",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "30",
                    prefijo: "30",
                    numero_linea: "56",
                }
            },{
                id: "39",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0790",
                    prefijo: "606",
                    numero_linea: "378",
                }
            },{
                id: "40",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "016977",
                    numero_linea: "2923",
                }
            },{
                id: "41",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0787",
                    prefijo: "458",
                    numero_linea: "106",
                }
            },{
                id: "42",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "016977",
                    numero_linea: "30646",
                }
            },{
                id: "43",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0499",
                    prefijo: "794",
                    numero_linea: "603",
                }
            },{
                id: "44",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "06",
                    prefijo: "4787",
                    numero_linea: "1674",
                }
            },{
                id: "45",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0405",
                    prefijo: "914",
                    numero_linea: "667",
                }
            },{
                id: "46",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "09",
                    prefijo: "1708",
                    numero_linea: "3370",
                }
            },{
                id: "47",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0176",
                    numero_linea: "1432317",
                }
            },{
                id: "48",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0225",
                    numero_linea: "2511817",
                }
            },{
                id: "49",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "454",
                    prefijo: "461",
                    numero_linea: "8390",
                }
            },{
                id: "50",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "105",
                    prefijo: "611",
                    numero_linea: "7009",
                }
            },{
                id: "51",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "261",
                    prefijo: "755",
                    numero_linea: "1896",
                }
            },{
                id: "52",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "238",
                    prefijo: "454",
                    numero_linea: "0444",
                }
            },{
                id: "53",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "626",
                    prefijo: "680",
                    numero_linea: "719",
                }
            },{
                id: "54",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "989",
                    prefijo: "208",
                    numero_linea: "617",
                }
            },{
                id: "55",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "224",
                    prefijo: "021",
                    numero_linea: "4170",
                }
            },{
                id: "56",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "771",
                    prefijo: "905",
                    numero_linea: "7021",
                }
            },{
                id: "57",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "325",
                    prefijo: "880",
                    numero_linea: "3060",
                }
            },{
                id: "58",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "194",
                    prefijo: "081",
                    numero_linea: "6242",
                }
            },{
                id: "59",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "08",
                    prefijo: "9675",
                    numero_linea: "5541",
                }
            },{
                id: "60",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "84",
                    prefijo: "9858",
                    numero_linea: "9373",
                }
            },{
                id: "61",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "642",
                    prefijo: "205",
                    numero_linea: "331",
                }
            },{
                id: "62",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "969",
                    prefijo: "928",
                    numero_linea: "861",
                }
            },{
                id: "63",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "547",
                    prefijo: "842",
                    numero_linea: "1378",
                }
            },{
                id: "64",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "525",
                    prefijo: "634",
                    numero_linea: "8756",
                }
            },{
                id: "65",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "952",
                    prefijo: "564",
                    numero_linea: "6646",
                }
            },{
                id: "66",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "560",
                    prefijo: "767",
                    numero_linea: "9894",
                }
            },{
                id: "67",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "656",
                    prefijo: "504",
                    numero_linea: "518",
                }
            },{
                id: "68",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "916",
                    prefijo: "022",
                    numero_linea: "643",
                }
            },{
                id: "69",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0409",
                    prefijo: "186",
                    numero_linea: "507",
                }
            },{
                id: "70",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "01",
                    prefijo: "9819",
                    numero_linea: "1068",
                }
            },{
                id: "71",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "35",
                    prefijo: "1441",
                    numero_linea: "9818",
                }
            },{
                id: "72",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "16",
                    prefijo: "8471",
                    numero_linea: "7875",
                }
            },{
                id: "73",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "82",
                    prefijo: "7575",
                    numero_linea: "4944",
                }
            },{
                id: "74",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "97",
                    prefijo: "5117",
                    numero_linea: "3065",
                }
            },{
                id: "75",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0171",
                    numero_linea: "1843294",
                }
            },{
                id: "76",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0690",
                    numero_linea: "1676901",
                }
            },{
                id: "77",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "0462",
                    prefijo: "960",
                    numero_linea: "328",
                }
            },{
                id: "78",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "07",
                    prefijo: "6688",
                    numero_linea: "1291",
                }
            },{
                id: "79",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "932",
                    prefijo: "432",
                    numero_linea: "8077",
                }
            },{
                id: "80",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "734",
                    prefijo: "378",
                    numero_linea: "2444",
                }
            },{
                id: "81",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "25",
                    prefijo: "79",
                    numero_linea: "36",
                }
            },{
                id: "82",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "86",
                    prefijo: "49",
                    numero_linea: "49",
                }
            },{
                id: "83",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0172",
                    numero_linea: "4946900",
                }
            },{
                id: "84",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "",
                    prefijo: "0937",
                    numero_linea: "4915904",
                }
            },{
                id: "85",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "52",
                    prefijo: "7288",
                    numero_linea: "9688",
                }
            },{
                id: "86",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "84",
                    prefijo: "2412",
                    numero_linea: "4160",
                }
            },{
                id: "87",
                telefono_tipo: "CELULAR",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "17",
                    prefijo: "0298",
                    numero_linea: "2284",
                }
            },{
                id: "88",
                telefono_tipo: "FIJO",
                telefono_numero: {
                    codigo_pais: "",
                    codigo_area: "88",
                    prefijo: "8780",
                    numero_linea: "9051",
                }
            },
        ]);
    });
};