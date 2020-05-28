--Se agrega la columna afiliado a la tabla obra social pacientes--
alter table obras_sociales_pacientes add column afiliado BOOLEAN default false;
--Se  agrega el enum de las condiciones de iva--
create type condicion_iva as enum('Excento', 'Gravado');
--Se agrega la columna iva en la tabla obra social paciente con los valores del enum anteriormente creado--
alter table obras_sociales_pacientes add column iva  condicion_iva