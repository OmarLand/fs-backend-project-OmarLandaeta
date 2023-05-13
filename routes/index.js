// En este fichero voy creando las rutas a donde quiero llevar mis datos
const router = require('express').Router()

//Acá debajo voy creando las const que contendran cada ruta
const authRoutes   = require('./auth');
const usersRoutes  = require('./users');
const skatersRoute = require('./skaters');


// Voy exportando las rutas:
module.exports = ( db ) => {

    router.use('/auth',    authRoutes(db) );
    router.use('/users',   usersRoutes() );
    router.use('/skaters', skatersRoute(db));
    
    return router;
}
 
 
