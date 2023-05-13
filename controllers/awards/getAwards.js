const queries = require('../../models/awards');
const errors  = require('../../misc/errors');

//Con esto muestro todos los Premios que tienen los atletan que están en mi tabla Awards


module.exports = ( db ) => async(req, res, next) => {
    
    const dbRes = await queries.selectAwards( await db )();

    console.log('====>', dbRes);

    if( !dbRes.ok ) return next(errors[500]);

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });

}