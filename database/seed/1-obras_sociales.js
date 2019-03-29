exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('obras_sociales').del()
    .then(() => {
        // Inserts seed entries
        return knex('obras_sociales').insert([
            {
                id: 1,
                nombre: "PAMI",
                descripcion: "Programa de Atención Médica Integral"
            },{
                id: 2,
                nombre: "Jerárquicos Salud",
                descripcion: ''
            },{
                id: 3,
                nombre: "Federada Salud",
                descripcion: ''
            },{
                id: 4,
                nombre: "OSUNL",
                descripcion: "Obra Social de la UNL"
            },{
                id: 5,
                nombre: "IAPOS",
                descripcion: "Instituto Autárquico Provincial de Obra Social"
            },{
                id: 6,
                nombre: "Sancor Salud",
                descripcion: ''
            },{
                id: 7,
                nombre: "OSUNER",
                descripcion: "Obra Social de la UNER"
            },{
                id: 8,
                nombre: "OSECAC",
                descripcion: "Obra Social de los Empleados de Comercio y Actividades Civiles"
            },{
                id: 9,
                nombre: "OSPJN",
                descripcion: "Obra Social del Poder Judicial de la Nación"
            },{
                id: 10,
                nombre: 'OSDE',
                descripcion: 'Obra Social de Ejecutivos y del Personal de Direccion de Empresas'
            },{
                id: 11,
                nombre: 'IOSPER',
                descripcion: 'Instituto de Obra Social de la Provincia de Entre Ríos'
            },{
                id: 12,
                nombre: 'Swiss Medical',
                descripcion: ''
            },{
                id: 13,
                nombre: 'AMUR',
                descripcion: ''
            },
            ,{
                id: 14,
                nombre: 'DASUTEN',
                descripcion: 'Dirección de acción social de la Universidad Tecnológica Nacional'
            }
        ]);
    });
};