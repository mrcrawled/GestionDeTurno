exports.seed =  (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('areas_especialidades').del()
    .then( () => {
        // Inserts seed entries
        return knex('areas_especialidades').insert([
            {
                id: 1,
                area_especialidad_tipo: 'Odontologo',
                descripcion: 'Especialista dedicado al cuidado y tratamiento de las enfermedades de los dientes.'
            },{
                id: 2,
                area_especialidad_tipo: 'Kinesiologo',
                descripcion: 'Especialista dedicado a atender los problemas de los movimientos del cuerpo actuando sobre el sistema óseo/muscular.'
            },{
                id: 3,
                area_especialidad_tipo: 'Psicologo',
                descripcion: 'Especialista que atiende los problemas psíquicos por medio del análisis de la conducta humana.'
            },{
                id: 4,
                area_especialidad_tipo: 'Oculista',
                descripcion: 'Especialista en las enfermedades de los ojos.'
            }
        ]);
    });
};
