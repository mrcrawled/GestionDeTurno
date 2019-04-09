exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('roles').del()
    .then( () => {
        // Inserts seed entries
        return knex('roles').insert([
            {
                rol_tipo: 'Admin',
                descripcion: 'Administrador del sistema'
            },{
                rol_tipo: 'Secretaria',
                descripcion: 'Gestiona turnos'
            },{
                rol_tipo: 'Paciente',
                descripcion: 'Persona con alguna dolencia'
            },{
                rol_tipo: 'Profesional',
                descripcion: null
            }
        ]);
    });
};
