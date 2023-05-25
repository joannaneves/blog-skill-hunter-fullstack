import React, { useEffect, useState } from 'react';

const BlogPage = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Chamada de API para buscar as postagens no back-end
    // Você pode incluir o token de autenticação no cabeçalho da solicitação

    // Busca as postagens
    fetch('/api/posts', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar postagens:', error);
      });
  }, [token]);

  return (
    <div>
      <h2>Postagens</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
