require('dotenv').config();
const express      = require('express');
const db           = require('./configs/db');
const app          = express();
const cookieParser = require('cookie-parser');
const errors       = require('./misc/errors');


// Redirecciono mi atención a las rutas...
const routes  = require( './routes' );

const { cookie } = require('simple-stateless-auth-library');

// NO olvidar esta joya!
app.use( express.json() ); // <====== 
// Sin esto puede petar en algún lado

// Llamo a mi funcion de cookie-parser
app.use( cookieParser() );

app.use( routes(db) );

app.use( (req, res, next) =>{
    next( errors[404] );
});

app.use( ({statusCode, error}, req, res, next) =>{
    res.status(statusCode).json({
        success : false,
        message : error.message,
    });
});

app.listen( process.env.PORT, () => console.info(`> Listening at ${process.env.PORT}`) )