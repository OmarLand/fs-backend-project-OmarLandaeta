const router            = require('express').Router();
const awardsControllers = require('../controllers/awards');


// Voy creando acá mis rutas de acceso a los endpoints
module.exports = ( db ) => {
    router.get( '/', awardsControllers.getAwards(db) );
    router.post( '/new', awardsControllers.newAwards(db) );


    return router;
}