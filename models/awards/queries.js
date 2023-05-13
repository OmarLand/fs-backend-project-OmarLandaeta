const { sql } = require('slonik');

const selectAllAwards = () => sql.unsafe`

    SELECT * FROM awards 

`

module.exports = {
    selectAllAwards,
}