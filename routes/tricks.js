const router            = require('express').Router();
const trickControllers = require('../controllers/tricks');


// Voy creando acá mis rutas de acceso a los endpoints
module.exports = ( db ) => {
    router.get( '/', trickControllers.getTricks(db) );


    return router;
}