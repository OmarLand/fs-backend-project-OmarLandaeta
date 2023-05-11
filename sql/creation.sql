-- Queries para la creación de mis tablas:

DROP TABLE IF EXISTS skaters;
DROP TABLE IF EXISTS tricks;
DROP TABLE IF EXISTS awards;
DROP TABLE IF EXISTS specials;


--Creo la tabla que contendrá los Skaters atletas
CREATE TABLE IF NOT EXISTS skaters ( 

    id SERIAL PRIMARY KEY, 
    name       VARCHAR(50) NOT NULL, 
    birth_city VARCHAR(50) NOT NULL, 
    birth_date DATE        NOT NULL 

);

-- Creo la tabla con los trucos de skate
CREATE TABLE IF NOT EXISTS tricks (

    id          SERIAL PRIMARY KEY,
    name        VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    difficulty  INTEGER NOT NULL

);


-- Creo una tabla con los premios recibidos por los atletas
CREATE TABLE IF NOT EXISTS awards (

    id SERIAL  PRIMARY KEY,
    skater_id  INTEGER REFERENCES skaters(id),
    trick_id   INTEGER REFERENCES tricks(id),
    award_date DATE NOT NULL,
    competition VARCHAR(50) NOT NULL,
    position   INTEGER NOT NULL
	
);