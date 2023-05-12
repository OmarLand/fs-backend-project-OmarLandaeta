module.exports = {
    400: {
      statusCode: 400,
      error: new Error("Fields are mandatory!"),
    },
    wrong_data: {
      statusCode: 400,
      error: new Error("Username or Password wrong!"),
    },
    401: {
      statusCode: 401,
      error: new Error("unauthorized"),
    },
    timeout_access: {
      statusCode: 401,
      error: new Error(" Oh oh! No tienes autorización!"),
    },
    403: {
      statusCode: 403,
      error: new Error("forbidden"),
    },
    404: {
      statusCode: 404,
      error: new Error("===> No encuentro la ruta..."),
    },
    418: {
      statusCode: 418,
      error: new Error("i'm a teapot!!"),
    },
    500: {
      statusCode: 500,
      error: new Error("===> ¡Woops! Algo esta mal."),
    },
  };