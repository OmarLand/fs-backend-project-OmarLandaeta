## Preparando mi proyecto de Back:

1. Compruebo los contenedores de postgres y adminer a través de docker-compose

2. Los scripts sql los preparo en el directorio ./sql. Para importarlos a través de adminer (http://localhost:8080). Primero creo mis tablas, luego inserto alguna info inicial

3. Genero mis directorios del proyecto.

4. Creo mi fichero "index.js" principal

5. Agrego: los Scripts patra crear las tablas "db:create", Para insertar los datos iniciales "db:insert"

## Buscando ideas para armar mis tablas para las bases de datos del proyecto:

6. Creamos las tablas de este proyecto serían: "skaters", "tricks", "awards", donde awards son los premios recibidos por los atletas en su momento, además de los tricks dominados por cada uno de los atletas.

7. 