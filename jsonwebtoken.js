const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'sua_chave_secreta';

// Rota de login para gerar um token JWT
app.post('/login', (req, res) => {
  // Realize a autenticação do usuário e verifique as credenciais

  // Se as credenciais estiverem corretas, gere um token JWT
  const token = jwt.sign({ userId: user.id }, secretKey);

  // Envie o token como resposta
  res.json({ token });
});

// Middleware para verificar o token em rotas protegidas
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.userId = decoded.userId;
    next();
  });
}

// Rota protegida que requer autenticação
app.get('/posts', verifyToken, (req, res) => {
  // Acesso permitido apenas para usuários autenticados
  // ...
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
