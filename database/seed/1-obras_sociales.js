exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('obras_sociales').del()
    .then(() => {
        // Inserts seed entries
        return knex('obras_sociales').insert([
            {
                nombre: "PAMI",
                descripcion: "Programa de Atención Médica Integral"
            },{
                nombre: "Jerárquicos Salud",
                descripcion: ''
            },{
                nombre: "Federada Salud",
                descripcion: ''
            },{
                nombre: "OSUNL",
                descripcion: "Obra Social de la UNL"
            },{
                nombre: "IAPOS",
                descripcion: "Instituto Autárquico Provincial de Obra Social"
            },{
                nombre: "Sancor Salud",
                descripcion: ''
            },{
                nombre: "OSUNER",
                descripcion: "Obra Social de la UNER"
            },{
                nombre: "OSECAC",
                descripcion: "Obra Social de los Empleados de Comercio y Actividades Civiles"
            },{
                nombre: "OSPJN",
                descripcion: "Obra Social del Poder Judicial de la Nación"
            },{
                nombre: 'OSDE',
                descripcion: 'Obra Social de Ejecutivos y del Personal de Direccion de Empresas'
            },{
                nombre: 'IOSPER',
                descripcion: 'Instituto de Obra Social de la Provincia de Entre Ríos'
            },{
                nombre: 'Swiss Medical',
                descripcion: ''
            },{
                nombre: 'AMUR',
                descripcion: ''
            },
            ,{
                nombre: 'DASUTEN',
                descripcion: 'Dirección de acción social de la Universidad Tecnológica Nacional'
            }
        ]);
    });
};