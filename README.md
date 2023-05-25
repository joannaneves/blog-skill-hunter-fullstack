# blog-skill-hunter-fullstack

Este é um projeto de blog desenvolvido com autenticação e autorização utilizando Node.js, Express e MySQL.

# Funcionalidades

- Autenticação de usuários
- Autorização de níveis de usuário (leitor e autor)
- Visualização de posts por usuários autenticados
- Criação e exclusão de postagens para usuários autorizados

# Requisitos

- Node.js
- MySQL

# Instalação
Clone este repositório:
bash

Copy code

git clone https://github.com/seu-usuario/meu-blog.git

# Acesse o diretório do projeto:
bash

Copy code

cd meu-blog

# Instale as dependências:
bash

Copy code

npm install

# Configure o banco de dados MySQL
Crie um banco de dados no MySQL
Edite o arquivo config/database.js e atualize as configurações de conexão com o seu banco de dados

# Execute as migrações do banco de dados:
bash

Copy code

npm run migrate

# Inicie o servidor:
bash

Copy code

npm start

O servidor estará em execução em http://localhost:3000

# Uso
Acesse o blog em um navegador:
URL: http://localhost:3000
Faça login para acessar as funcionalidades do blog.

# Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto está licenciado sob a MIT License.
