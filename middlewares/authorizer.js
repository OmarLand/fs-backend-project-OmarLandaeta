const { deserialize } = require('simple-stateless-auth-library');
const errors = require('../misc/errors');

module.exports = ( req, res, next ) => {

    const payload = deserialize(req);

    console.info('=> PAYLOAD ==', payload);

    if(!payload) return next( errors.timeout_access );

    res.locals = payload;

    // console.info( '>>> 100% Seguro xD' );

    next();

}