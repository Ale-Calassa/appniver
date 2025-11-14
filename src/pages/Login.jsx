import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validUser = 'Caio';
  const validPass = 'Cello';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUser && password === validPass) {
      navigate('/dashboard');
    } else {
      alert('errou , tente até acertar!');
    }
  };

  return (
    <div className="login-background">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar na festa </button>
        </form>
      </div>
    </div>
  );
};

export default Login;