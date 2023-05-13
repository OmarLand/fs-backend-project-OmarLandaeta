const router            = require('express').Router();
const skaterControllers = require('../controllers/skaters');


// Voy creando acá mis rutas de acceso a los endpoints
module.exports = ( db ) => {
    router.get( '/', skaterControllers.getSkaters(db) );


    return router;
}