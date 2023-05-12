// En este fichero voy creando las rutas a donde quiero llevar mis datos
const router = require('express').Router()
const { authorizer } = require('../middlewares')

//Acá debajo voy creando las const que contendran cada ruta
const usersControllers = require('../controllers/users');

// Voy exportando las rutas:
module.exports = (db ) => {

    router.get('/',  authorizer, usersControllers.getUser() );

    return router;
    
}
 
 