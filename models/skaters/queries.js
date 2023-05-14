const { sql } = require('slonik');

// Obtengo la liste de los atletas de mi tabla
const selectAllSkaters = () => sql.unsafe`
    SELECT * FROM skaters 
`


const getSkatersAwarded = () => sql.unsafe`
    SELECT awards.competition, awards.award_date, skaters.name AS skater, tricks.name AS trick, tricks.description
    FROM skaters
    INNER JOIN awards ON skaters.id = awards.skater_id
    INNER JOIN tricks ON tricks.id = awards.trick_id
    ORDER BY awards.award_date ASC 
`

module.exports = {
    selectAllSkaters,
    getSkatersAwarded,
}
