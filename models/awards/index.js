const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllAwards } = require('./queries');


const selectAwards = (db) => async () => {

    try{

        const response = await db.query( selectAllAwards() );

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

    selectAwards,

}