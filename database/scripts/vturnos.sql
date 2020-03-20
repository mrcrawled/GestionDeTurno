CREATE OR REPLACE VIEW vturnos as select t.id as id_turno, t.id_paciente, CONCAT(p.nombre,' ',p.apellido) as paciente, it.fecha_hora_turno,t.practica
FROM turnos t
JOIN pacientes p ON p.id = t.id_paciente
JOIN informacion_turnos it ON t.id = it.id_turno
JOIN estados e ON e.id = it.id_estado
WHERE e.descripcion = 'ASIGNADO';
