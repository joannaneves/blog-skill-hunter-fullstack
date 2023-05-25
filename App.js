import React, { useState } from 'react';
import LoginForm from './blog/LoginForm';
import BlogPage from './blog/BlogPage';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div>
      {!token ? <LoginForm onLogin={handleLogin} /> : <BlogPage token={token} />}
    </div>
  );
};

export default App;
