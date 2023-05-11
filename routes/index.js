// En este fichero voy creando las rutas a donde quiero llevar mis datos
const router = require('express').Router()

//Acá debajo voy creando las const que contendran cada ruta
const authRouther = require('./auth');

// Voy exportando las rutas:
module.exports = ( db ) => {

    router.use('/auth', authRouther(db))

    return router;
}
 
 
