const { insertUser, selectByUserName } = require('./queries')

// CReo el usuario y lo meto en mi base de datos
const createUser = (db) => async (username, userpassword) => {
    try{
        await db.query( insertUser(username, userpassword) )
        return {
            ok: true,
        }

    } catch( error ){
        console.info( '==> Create User Error', error.message );
        return {
            ok: false,
            message: error.message
        }
    }
}

// PAra el login lo busco en mis tablas y si existe le doy acceso
const selectUser = (db) => async ( username, compareFn ) => {

    try{
        // Busco el USER en caso exista => sino muestro error
        const user = await db.maybeOne( selectByUserName( username ) )
        //console.log( '==>>>> [USER]', user );
        if( !user ){
            return{
                ok: false,
                error_code: 'wrong_data'
            }
        }

        // Busco el PASSWORD si es correcto, sino muestro error
        const areEqual = await compareFn( user.userpassword );
        //console.info('¿Coinciden? ===>>>', areEqual )
        if( !areEqual ){
            return{
                ok: false,
                error_code: 'wrong_data'
            }
        }

        // const { username } = user;
        // Si todo va bien [Usuario correcto y contraseña correcta le doy acceso]
        return{
            ok : true,
            dbRes: {
                username: user.username,
            }
        };

    // Si algo falla en mis queries lo muestro para debug interno pero muestro error
    } catch( error ){
        console.info( '==> Error in SELECT', error.message );
        return {
            ok: false,
            message: error.message
        }
    } 

}

module.exports = {
    createUser,
    selectUser,
}