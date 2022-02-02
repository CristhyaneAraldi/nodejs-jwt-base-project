const { Post } = require('../models');

// module.exports = async (_req, res) => {
//   const posts = await Post.findAll({ attributes: { exclude: 'id' } });
//   res.status(200).json({ mockPosts: posts });
// };

/* Mas como faríamos para recuperar apenas os posts do usuário logado?
  Lembra-se de que o middleware de autenticação recupera o usuário do banco de dados 
  e o coloca no req ? Esse objeto é o mesmo que é passado para todos os middlewares 
  e para a callback da rota. Como o middleware de autenticação é executado antes das 
  funções dos controllers, req conterá o usuário logado quando o controller em 
  /controllers/posts for executado, e poderíamos utilizá-lo para fazer uma consulta 
  ao banco de dados que trouxesse somente seus posts. 
  Para confirmar isso, basta colocar um console.log dentro do controller: */

  module.exports = async (req, res) => {
    console.log(req.user.dataValues);
    const posts = await Post.findAll({ attributes: { exclude: 'id' } });
    res.status(200).json({ mockPosts: posts });
  };

// -------------------------------------
// saída no terminal onde executou a API:
// {
//   id: 3,
//   username: 'italssodj',
//   password: 'senha123'
// }
