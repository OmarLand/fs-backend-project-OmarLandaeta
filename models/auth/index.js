const { insertUser } = require('./queries')

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

module.exports = {
    createUser,
}