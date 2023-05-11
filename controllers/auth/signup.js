const { createUser } = require('../../models/auth');

const errors = require('../../misc/errors');

module.exports = (db) => async ( req, res, next ) => {

    const { username, userpassword  } = req.body;

    console.log ('=>>>> ', username, userpassword);

    if( !username || !userpassword  ) return next([wrong_data]);

    const dbRes = await createUser(await db)(username, userpassword);

    if(!dbRes.ok) return next(errors[500]);
    
    res.status(200).json({
        success : true,
    });

}