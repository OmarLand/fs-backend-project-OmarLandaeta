## Preparando mi proyecto de Back:

1. Compruebo los contenedores de postgres y adminer a través de docker-compose

2. Los scripts sql los preparo en el directorio ./sql. Para importarlos a través de adminer (http://localhost:8080). Primero creo mis tablas, luego inserto alguna info inicial

3. Genero mis directorios del proyecto.

4. Creo mi fichero "index.js" principal

5. Agrego: los Scripts patra crear las tablas "db:create", Para insertar los datos iniciales "db:insert"

## Buscando ideas para armar mis tablas para las bases de datos del proyecto:

6. Creamos las tablas de este proyecto serían: "skaters", "tricks", "awards", donde awards son los premios recibidos por los atletas en su momento, además de los tricks dominados por cada uno de los atletas.

7. Se añade las librerias para la autenticación y autorización a mi app

8. Creo el endpoint de registro:
  - Con este endpoint realizo el registro de usuarios en mi base de datos para acceder a las rutas que corresponda

```js
  localhost:4000/auth/signup
```

9. Se crea los endpoints para signin:
- Con este endpoind, podrá acceder usando el usuario antes registrado. Nota: Si no esta registrado no permite ingresar

```js
  localhost:4000/auth/signin
```

10. Se crea el endpoint para cerrar sesión: signout.
- Para cerrar la sesión o eliminar mis cookies que validan la autenticación del usuario uso este endpoint

```js
  localhost:4000/auth/signout
```

11. Se añade nuevas caracteristicas, para autenticación y validación del usuario

12. Se crea el endpoint para:
- Permite visualizar todos aquellos atletas que se han registrado en mi base de datos

```js
  localhost:4000/skaters
```

13. 