## Descripción del proyecto: 👨‍💻
- Se trata de un proyecto base que hace un registro de competiciones en el deporte Skateboard, donde podremos ver cada atleta con su truco ganador.

## Preparando mi proyecto de Back: 🐱‍🏍🚀👨‍💻
 
1. Compruebo los contenedores de postgres y adminer a través de docker-compose

2. Los scripts sql los preparo en el directorio ./sql. Para importarlos a través de adminer (http://localhost:8080). Primero creo mis tablas, luego inserto alguna info inicial

3. Genero mis directorios del proyecto.

4. Creo mi fichero "index.js" principal

## Buscando ideas para armar mis tablas para las bases de datos del proyecto:

6. Creamos las tablas de este proyecto serían: "skaters", "tricks", "awards", donde awards son los premios recibidos por los atletas en su momento, además de los tricks dominados por cada uno de los atletas.

7. Se añade las librerias para la autenticación y autorización a mi app ✌💪

8. Creo el endpoint de registro SIGNUP:
  - Con este endpoint realizo el registro de usuarios en mi base de datos para acceder a las rutas que corresponda

POST:
```js
   localhost:4000/auth/signup
```

9. Se crea los endpoints para SIGNIN:
- Con este endpoind, podrá acceder usando el usuario antes registrado. Nota: Si no esta registrado no permite ingresar

POST:
```js
  localhost:4000/auth/signin
```

10. Se crea el endpoint para cerrar sesión: SIGNOUT.
- Para cerrar la sesión o eliminar mis cookies que validan la autenticación del usuario uso este endpoint

POST:
```js
  localhost:4000/auth/signout
```

11. Se añade nuevas caracteristicas, para autenticación y validación del usuario

12. Se crea el endpoint para SKATERS:
- Permite visualizar todos aquellos atletas que se han registrado en mi base de datos

GET:
```js
  localhost:4000/skaters
```

13. Se crea el endpoint para buscar por ID un atleta determinado y mirar sus competiciones ganadas, truco y año ganador respectivamente

GET:
```js
  localhost:4000/skaters/:id
```


14. Se crea el endpoint para ver trucos TRICKS:
- Permite visualizar todos aquellos trucos, desde el más básico al mas complejo de todos con una descripción de ello

GET:
```js
  localhost:4000/tricks
```

15.  Se crea el endpoint para ver los premios de cada Atleta - Awards:
- Permite ver todos los premios registrados que están relacionados con el atleta y con el truco ganador.

GET:
```js
  localhost:4000/awards
```

16. Se crea el endpoind para ver los atletas según el truco y las competiciones ganadas por año de menor a mayor:
- Muestra las competiciones ganadas por los atletas, según el premio, truco ganado y ciudad donde ganó:

GET:
```js
  localhost:4000/skaters/competitions
```

17. Se crea el endpoint para la inserción de nuevos skaters en la tabla skaters.
- Me permite insertar nuevos skaters para mostrar luego

POST:
```js
  localhost:4000/skaters/new
```
- El body para la inserción sería asi:
```js

{
    "name"       : "Danny Way",
    "birth_city" : "California",
    "birth_date" : "1989-01-05"
}

```

18. Se crea el endpoint para la inserción de nuevos trucos en la tabla Tricks.
- Me permite insertar nuevos trucos para mostrar luego

POST:
```js
  localhost:4000/tricks/new
```
- El body para la inserción sería asi:
```js

{
    "name"        : "NombreTruco",
    "description" : "Descripción resumida del truco",
    "difficulty"  : "1" //Deberá ser numérico
}

```

19. Se crea el endpoint para agregar nuevos premios y se le asigna de forma aleatoria a los skaters con un truco random ganador:

POST:
```js
  localhost:4000/awards/new
```
- El body para la inserción sería el siguiente:
```js
  {
      "award_date"  : "YYYY-MM-DD",
      "competition" : "Competición ganada",
      "position"    : "1" //Deberá ser numérico
  }
```

