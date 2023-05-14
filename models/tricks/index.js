const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllTricks } = require('./queries');


const selectTricks = (db) => async () => {

    try{

        const response = await db.query( selectAllTricks() );

        return {
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

const insertNewTrick = ( db ) => async (infoTrick) => {

    try{

        await db.query(sql.unsafe`
            INSERT INTO tricks ( name, description, difficulty )
            VALUES (
                 ${infoTrick.name}, 
                 ${infoTrick.description}, 
                 ${infoTrick.difficulty} 
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

    selectTricks,
    insertNewTrick,

}