const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllSkaters, getSkatersAwarded } = require('./queries');

// Selecciono los atletas de la tabla skaters
const selectSkaters = (db) => async () => {

    try{
        const response = await db.query( selectAllSkaters() );
        return {
            ok    : true,
            response : response.rows
        }

    } catch( error ) {
        return {
            ok      : false,
            message : error.message
        }
    }
}

// Selecciono los skaters con sus respectivos premios y truco ganador
const selectSkatersAwards = ( db ) => async() => {

    try{

        const response = await db.query( getSkatersAwarded() );
        return{
            ok       : true,
            response : response.rows
        }

    } catch( error ) {
        return {
            ok      : false,
            message : error.message
        }
    }

}

// Inserto nuevo skaters a la tabla skaters
const insertNewSkater = ( db ) => async (infoSkater) => {

    try{


        await db.query(sql.unsafe`
            INSERT INTO skaters ( name, birth_city, birth_date )
            VALUES (
                 ${infoSkater.name}, 
                 ${infoSkater.birth_city}, 
                 ${infoSkater.birth_date} 
            )
        `)

        return {
            ok : true,
        }

    } catch( error ) {
        return {
            ok      : false,
            message : error.message,
        }
    }

}




module.exports = {

    selectSkaters,
    selectSkatersAwards,
    insertNewSkater,

}