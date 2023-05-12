const { sql }    = require('slonik');
const insertUser = (username, userpassword) => sql.unsafe`

    INSERT INTO users ( username, userpassword )
    VALUES(
        ${username}, ${userpassword}
    );
`

const selectByUserName = ( username ) => sql.unsafe`

        SELECT username, userpassword
        FROM users 
        WHERE username LIKE ${username}

`


module.exports = {
    insertUser,
    selectByUserName
}