--Se borra la columna Documento con formato Json--
ALTER TABLE pacientes DROP COLUMN documento;
--Se crea la columna Documento con formato Integer--
ALTER TABLE pacientes ADD COLUMN documento INTEGER UNIQUE