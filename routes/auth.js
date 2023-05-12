// En este fichero voy creando las rutas a donde quiero llevar mis datos
const router = require('express').Router();
const { authorizer } = require('../middlewares');

//Acá debajo voy creando las const que contendran cada ruta
const authControllers = require('../controllers/auth');

// Voy exportando las rutas:
module.exports = ( db ) => {

    router.post('/signup',  authControllers.signup( db ));
    router.post('/signin',  authControllers.signin( db ));
    router.post('/signout', authorizer, authControllers.signout( db ));

    return router;
}
 
 
