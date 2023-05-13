const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllTricks } = require('./queries');


const selectTricks = (db) => async () => {

    try{

        const response = await db.query( selectAllTricks() );

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


module.exports = {

    selectTricks,

}