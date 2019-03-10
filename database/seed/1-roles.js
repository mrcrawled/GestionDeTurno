exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('roles').del()
    .then( () => {
        // Inserts seed entries
        return knex('roles').insert([
            {
                id: 1,
                rol_tipo: 'Admin',
                descripcion: 'Administrador del sistema'
            },{
                id: 2,
                rol_tipo: 'Secretaria',
                descripcion: 'Gestiona turnos'
            },{
                id: 3,
                rol_tipo: 'Paciente',
                descripcion: 'Persona con alguna dolencia'
            },{
                id: 4,
                rol_tipo: 'Profesional',
                descripcion: null
            }
        ]);
    });
};
