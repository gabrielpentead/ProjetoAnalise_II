import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação pode ser adicionada aqui
    console.log('Login realizado com:', { username, password });
  };

  return (
    <div className="container-carrinho">
      <div className="formulario-login">
        <div className="login">
          <div className="centralizar">
            <div className="img-container">
              <img src="/imagens/LogoFeiraGreen.png" alt="Logo Feira Green" />
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                <b>Nome de usuário</b>
              </label>
              <input
                type="text"
                placeholder="Insira o nome de usuário"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="password">
                <b>Senha</b>
              </label>
              <input
                type="password"
                placeholder="Insira a senha"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Entrar</button>
            </form>

            <div className="links">
              <Link to="/">Esqueceu a senha?</Link>
              <Link to="/">Criar uma conta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
