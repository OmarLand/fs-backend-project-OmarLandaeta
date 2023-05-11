-- Inserto la informacion inicial a la tabla de skaters

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Tony Hawks','San Diego','1968-05-12' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Rodney Mullen','Gainesville','1966-08-17' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Bob Burnquist','Rio de Janeiro','1976-10-10' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Daewon Song','Seul','1975-02-19' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Mark Gonzales','California','1968-06-01' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Chris Cole','Statesville','1982-03-10' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Chris Haslam','Ontaro','1980-12-19' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Bam Margera','West Chester','1979-09-28'
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Andrew Reynolds','Lakeland','1978-10-01' 
);

INSERT INTO skaters ( name, birth_city, birth_date ) 
VALUES(
     'Stacy Peralta','California','1957-10-15'
);


-- Inserto la informacion inicial a la tabla de tricks

INSERT INTO tricks ( name, description, difficulty ) 
VALUES ( 
    'Ollie',
    'Es el truco por excelencia, el primer truco que hemos aprendido a hacer muchos skaters y el truco que te abre la puerta a todos los demás',
    2 
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Frontside 180 Ollie',
     'Es un ollie que con la ayuda e impulso de los brazos, tanto el cuerpo como la tabla hacen un giro de 180º hacia adelante',
     2
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Backside 180 Ollie',
     'Es un ollie que con la ayuda e impulso de los brazos, tanto el cuerpo como la tabla hacen un giro de 180º hacia atrás',
     3
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Kickflip',
     'Otro clásico de los trucos de skate del skateboarding, un kickflip es un ollie en el que una vez en el aire utilizamos el pie delantero para hacer que la tabla de una vuelta en su eje longitudinal',
     5
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Frontside 180 Kickflip',
     'De la misma forma que en el ollie, en el kickflip se empiezan a añadir las rotaciones. En este caso un frontside 180 kickflip, en el que se mezcla la vuelta que da la tabla con los 180º que rota el skater',
     7
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Backside 180 Kickflip',
     'Igual que el fs flip pero la rotación del cuerpo es en el otro sentido. Así que la tabla sigue girando en el mismo sentido pero la rotación del cuerpo cambia.',
     7
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Heelflip',
     'Es como un kickflip pero la tabla hace la rotación del eje longitudinal en el otro sentido, es decir que un regular la hace girar hacia la izquierda y un goofy hacia la derecha.',
     3
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Varial Kickflip',
     'Truco complejo que junta un bs pop shove-it con un kickflip. La tabla tiene que dar una vuelta entera de kickflip en el eje longitudinal y 180º de rotación de backside. El cuerpo del skater permanece quieto.',
     3
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Varial Heelflip',
     'Es la combinación de un BS Shove-it con un Heelflip. La tabla rota 180º en el mismo sentido que en el varial kickflip, pero rota al revés en el eje longitudinal.',
     4
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     '360 Flip o Tre Flip',
     'Otro de los trucos estrella en el skateboarding. Se trata de un backside shove-it 360º y un kickflip juntos. La curiosidad es que la tabla hace una rotación completa, una vuelta en el eje longitudinal y otra en el transversal.',
     8
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Hard Flip',     
     'Truco en el que se mezcla un kickflip con un Bs shove it.',
     7
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Caballerial',
     'Es un ollie 360 mientras se va de fakie. Steve Caballero fue la primera persona en hacerlo bautizando para siempre este truco. ',
     8
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Imposible',
     'Uno de los trucos de skate insignia de Rodney Mullen, es un ollie en el que el skate da una vuelta entera alrededor del pie trasero.',
     8
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Airwalk',
     'Mano delantera agarrando el nose mientras los pies dejan de tener contacto con la tabla en el aire.',
     10
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     'Melon',
     'Mano delantera agarrando el canto de los talones, por detrás del pie delantero.',
     10
);
INSERT INTO tricks ( name, description, difficulty ) 
VALUES (
     '900_Air',
     'Truco especial ganadora del premio......',
     10
);


-- Inserto la informacion inicial a la tabla de awards

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name LIKE '%Tony Hawks%'),
     (SELECT id FROM tricks WHERE name LIKE '%900_Air%' LIMIT 1),
     '1995-10-01',
     'Street League Skateboarding',
     1 
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name LIKE '%Rodney Mullen%'),
     (SELECT id FROM tricks WHERE name LIKE '%Backside 180 Ollie%' LIMIT 1),
     '1995-12-26',
     'X Games Red Bull 1998',
     5 
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name LIKE '%Rodney Mullen%'),
     (SELECT id FROM tricks WHERE name = 'Kickflip' LIMIT 1),
     '2001-01-01',
     'X Games Red Bull 2001',
     2 
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name LIKE '%Bam Margera%'),
     (SELECT id FROM tricks WHERE name = 'Hellflip' LIMIT 1),
     '2005-07-11',
     'Vans Park Series 1998',
     3  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Bam Margera%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Backside 180 Ollie%'),
     '1995-10-01',
     'World Cup of Skateboarding',
     5  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Daewon Song%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Caballerial%'),
     '1999-05-04',
     'Red Bull Bowl Rippers 1999',
     1 
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Chris Cole%'),
     (SELECT id FROM tricks WHERE name ILIKE '%360 Flip%'),
     '2011-10-01',
     'Vans Pool Party',
     5  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Chris Haslam%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Airwalk%'),
     '2015-07-06',
     'Vans Pool Party 2015',
     2  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Bam Margera%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Backside 180 Kickflip%'),
     '2020-08-25',
     'Red Bull Extreme Games 2020',
     1  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Chris Haslam%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Melon%'),
     '2022-10-01',
     'X Games Red Bull 2022',
     3  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Bob Burnquist%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Backside 180 Kickflip%'),
     '2015-01-08',
     'X Games Red Bull 2015',
     4  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Mark Gonzales%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Hard Flip%'),
     '2015-03-26',
     'Red Bull Bowl Rippers 2015',
     5  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Rodney Mullen%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Varial Kickflip%'),
     '2019-10-01',
     'WS Park World Championships 2019',
     1  
);

INSERT INTO awards ( skater_id, trick_id, award_date, competition, position ) 
VALUES (
     (SELECT id FROM skaters WHERE name ILIKE '%Andrew Reynolds%'),
     (SELECT id FROM tricks WHERE name ILIKE '%Frontside 180 Ollie%'),
     '2013-11-24',
     'X Games Red Bull 2013',
     5  
);

