const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Configuração do body-parser para processar requisições JSON
app.use(bodyParser.json());

// Rota para autenticação/login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar email e senha no banco de dados
  // Exemplo simplificado: apenas verifica se o email é 'admin' e a senha é 'password'

  if (email === 'admin' && password === 'password') {
    // Gerar token JWT
    const token = jwt.sign({ email }, 'secreto', { expiresIn: '1h' });

    // Retornar o token para o cliente
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Rota protegida para buscar as postagens
app.get('/api/posts', authenticateToken, (req, res) => {
  // Verificar o token de autenticação
  // Você pode usar a biblioteca jsonwebtoken para verificar e decodificar o token

  // Retorna algumas postagens
  const posts = [
    { id: 1, title: 'Postagem 1', content: 'Conteúdo da postagem 1' },
    { id: 2, title: 'Postagem 2', content: 'Conteúdo da postagem 2' },
  ];

  res.json(posts);
});

// Função middleware para autenticar o token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'secreto', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
