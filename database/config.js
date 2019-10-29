const { Pool } = require('pg')

const connectionString = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user:  process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database:process.env.PGDATABASE,
    charset: process.env.PGCHARSET,
});

let query = connectionString.query.bind(connectionString);
connectionString.query = async (consulta, parametros=null) => {
    try{
        let queryResponse;
        if(parametros !== null){
            queryResponse = await query(consulta, parametros);
        } else {
            queryResponse = await query(consulta);
        }
        switch(queryResponse.command){
            case "SELECT":
                if(/LIMIT\s1(\s|$)/i.test(consulta)){
                    return queryResponse.rowCount > 0 ? queryResponse.rows[0] : false;
                }
                return queryResponse.rowCount > 0 ? queryResponse.rows : false;
            case "INSERT":
            case "UPDATE":
                if(/RETURNING/i.test(consulta)){
                    return queryResponse.rowCount > 0 ? queryResponse.rows[0] : false;
                }
                return queryResponse.rowCount > 0;
            case "DELETE":
                return queryResponse.rowCount > 0;
        }
        return queryResponse;
    } catch(error) {
        console.log(error);
        return false;
    }
}

module.exports = connectionString;