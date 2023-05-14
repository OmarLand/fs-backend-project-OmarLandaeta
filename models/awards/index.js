const { sql } = require('slonik');

// Llamo a la función que está dentro de fichero Queries
const { selectAllAwards } = require('./queries');

// Selecciono y muestro todos los premios
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

// Inserto nueva premiación 
const insertNewAward = ( db ) => async (infoAwards) => {

    try{


        await db.query(sql.unsafe`
            INSERT INTO awards ( skater_id, trick_id, award_date, competition, position )
            VALUES (
                (SELECT id FROM skaters  ORDER BY RANDOM() LIMIT 1),
                (SELECT id FROM tricks ORDER BY RANDOM() LIMIT 1),
                 ${infoAwards.award_date}, 
                 ${infoAwards.competition}, 
                 ${infoAwards.position} 
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

    selectAwards,
    insertNewAward,

}