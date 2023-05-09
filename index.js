const express = require('express');
const db      = require('./configs/db');
const app     = express();

// Redirecciono mi atención a las rutas...
const routes  = require( './routes' );

// NO olvidar esta joya!
app.use( express.json() ); // <====== 
// Sin esto puede petar en algún lado

app.use( routes(db) );

app.use( (req, res, next) =>{
    next({
        statusCode: 404,
        error     : new Error( '==> No encuentro la ruta...' ),
    });
});

app.use( ({statusCode, error}, req, res, next) =>{
    res.status(statusCode).json({
        success : false,
        message : error.message,
    });
});

app.listen( process.env.PORT, () => console.info(`> Listening at ${process.env.PORT}`) )