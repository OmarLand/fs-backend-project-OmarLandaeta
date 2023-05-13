const queries = require('../../models/skaters');
const errors  = require('../../misc/errors');

//Con esto muestro todos los skaters que están en mi tabla skaters


module.exports = ( db ) => async(req, res, next) => {
    
    const dbRes = await queries.selectSkaterAwards( await db )();

    console.log('====>', dbRes);

    if( !dbRes.ok ) return next(errors[500]);

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });

}