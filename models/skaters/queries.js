const { sql } = require('slonik');

const selectAllSkaters = () => sql.unsafe`

    SELECT * FROM skaters 

`

module.exports = {
    selectAllSkaters,
}