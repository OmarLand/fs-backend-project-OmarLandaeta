const { hash } = require('simple-stateless-auth-library')
const { createUser } = require('../../models/auth');
const errors = require('../../misc/errors');

module.exports = (db) => async ( req, res, next ) => {

    const { username, userpassword  } = req.body;

    console.log ('=>>>> ', username, userpassword);

    //Con esto retorno un error si no tienen valores mis parametros
    if( !username || !userpassword  ) return next([wrong_data]);

    //Con esta función encripto el valor de userpassword
    const encrypted = await hash.encrypt(userpassword)

    const dbRes = await createUser(await db)(username, encrypted);

    if(!dbRes.ok) return next(errors[500]);
    
    res.status(200).json({
        success : true,
    });

}