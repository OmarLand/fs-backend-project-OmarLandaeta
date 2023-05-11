const { sql } = require('slonik');

const insertUser = (username, userpassword) => sql.unsafe`

    INSERT INTO users ( username, userpassword )
    VALUES(
        ${username}, ${userpassword}
    );
`


module.exports = {
    insertUser,
}