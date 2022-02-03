const app = require("./app");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

// ---------------------------------------------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const routes = require('./routes');

// /* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
// const validateJWT = require('./auth/validateJWT');

// const PORT = process.env.PORT || 8080;

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const apiRoutes = express.Router();

// // usamos esse middleware para adicionar autenticação na nossa rota de listagem de posts.
// apiRoutes.get('/api/posts', validateJWT, routes.getPosts);

// // apiRoutes.get('/api/posts', routes.getPosts);

// apiRoutes.post('/api/users', routes.createUsers);
// apiRoutes.get('/api/users', routes.getUsers);
// apiRoutes.post('/api/login', routes.login);

// /* Note que não queremos autenticar o login e nem criação de usuários, 
//   pois precisamos deles para o processo de autenticação! Se houvesse outras rotas 
//   protegidas na nossa aplicação, usaríamos o middleware nelas também! */

// app.use(apiRoutes);

// app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
