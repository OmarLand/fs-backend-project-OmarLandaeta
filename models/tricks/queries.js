const { sql } = require('slonik');

const selectAllTricks = () => sql.unsafe`

    SELECT * FROM tricks 

`

module.exports = {
    selectAllTricks,
}