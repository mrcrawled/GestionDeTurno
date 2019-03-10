# Sistema de Gesion de Turnos

Requisitos
- Node Js (última versión o última versión estable)
- EcmaScript
- PostgreSQL



__Instalar y configurar el Proyecto__
- Descargar o clonar el proyecto situado dentro del repositorio. Una vez realizado, ejecutar npm install o npm i, para instalar las dependecias.
- Dentro de Knexfile.js, cambiar las credenciales correspondiente a su base de datos. Una vez realizado, crear una base de datos que correspondan con la configuración estalecida en Knexfile, para poder ejecutar las migraciones y crear las tablas.
- Una vez que se tenga todo instalado, situarse en el raiz y ejecutar lo siguiente: nodemon index.js para poder levantar el proyecto. La aplicación, escucha el puerto 3000, si desea que escuhe otro puerto, cambie la configuración dentro de .env, y elija el puerto que desee



__Knex__  
Para poder correr los comandos de knex previamente se debe instalar con el siguiente de la siguiente manera: npm install -g knex
Para poder crear las tablas en la base de datos y correr las migraciones, es necesario ejecutar los siguientes comandos:
- Para crear las tablas: knex migrate:make migration_name. Por convención, conviene usar knex migrate:make create_nombredelatabla_table, para saber que estamos creando una tabla y no la estamos modificando.
- Una vez creadas las tablas, es necesario correr las migraciones con el siguiente comando: knex migrate:latest. Dicho comando, creara las tablas dentro de la base de datos, y creará una tabla adicional para que se tenga registro de las migraciones que se van haciendo.
- Si quisieramos volver atrás por algún inconveniente que haya surgido, se ejecuta el siguiente comando: knex migrate:rollback, que vuelve atrás las migraciones realizadas.

Algunas veces, es necesario crear seeders que ayudan a poblar la base de datos. Para crearlos hay que ejecutar el siguiente comando: knex seed:make seed_name. Por convencion conviene nombrarlo asi: knex seed:make nombre de la tabla, para saber que nos referimos a esa entidad en particular. Para ejecutar el seed, ejecutar el siguiente comando: knex seed:run. Con eso, se insertaran los registros en la tabla correspondiente.

