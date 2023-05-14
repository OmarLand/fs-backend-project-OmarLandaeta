const queries = require('../../models/awards');
const errors = require('../../misc/errors');

module.exports = ( db ) => async( req, res, next ) => {

    let dbRest = await queries.insertNewAward( await db )( req.body );

    console.log( '=>>>>', dbRest );

    if( !dbRest.ok ) return next(errors[500]);

    res.status( 200 ).json({
        success : true,
        data    : dbRest.Data,
    })


} 