const queries = require('../../models/tricks');
const errors  = require('../../misc/errors');

//Con esto muestro todos los Trucos que están en mi tabla Tricks


module.exports = ( db ) => async(req, res, next) => {
    
    const dbRes = await queries.selectTricks( await db )();

    console.log('====>', dbRes);

    if( !dbRes.ok ) return next(errors[500]);

    res.status(200).json({
        success : true,
        data    : dbRes.response,
    });

}