const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllSkaters, selectSkaterAwards } = require('./queries');


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

const selectSkateAward = ( db ) => async() => {

    try{

        const response = await db.query( selectSkaterAwards() );

    } catch( error ) {
        return {
            ok      : false,
            message : error.message
        }
    }

}



module.exports = {

    selectSkaters,
    selectSkateAward,

}