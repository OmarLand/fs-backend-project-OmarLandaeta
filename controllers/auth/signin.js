const { hash, serialize }  = require('simple-stateless-auth-library');
const errors         = require('../../misc/errors');
const { selectUser } = require('../../models/auth');

module.exports = (db) => async ( req, res, next ) => {

    const { username, userpassword } = req.body;

    if( !username || !userpassword ) return next(errors[400]);

    const dbRes = await selectUser(await db)(username, hash.compare(userpassword));
   
    if(!dbRes.ok) return next( errors[dbRes.error_code || 500 ] );

    //dbRes.content; // contenido del username
    // console.log( '===>', dbRes.content )
    // COn esta funcion creo la Cookie y serializo las credenciales del usuario
    serialize( res, dbRes )

    res.status(200).json({
        success : true,
    });

}