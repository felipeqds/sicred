import React, { useState } from 'react'
import './style.scss';
function Login() {
  document.title = "Dragões / Login";

  const [user, setUser] = useState('entrar');
  const [pass, setPass] = useState('entrar');

  function handleSubmit(e) {
    e.preventDefault();
    if(user !== 'entrar' || pass !== 'entrar'){
        alert("Usuario ou senha incorretos.");
    }else{
        localStorage.setItem('logged', (user && pass === 'entrar'));
        window.location.reload();
    } 
  }

  return (
    <div className="login">
      <form className="login-box" onSubmit={ handleSubmit }>
        <h3 className="login-box--title">Login</h3>
        <div className="login-box--group">
          <label htmlFor="user">Usuário:</label>
          <input
            type="text"
            name="user"
            id="user"
            required
            value={user}
            onChange={e => setUser(e.target.value)}
          />
        </div>
        <div className="login-box--group">
          <label htmlFor="pass">Senha:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            required
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
        </div>
        <div className="login-box--group">
          <button type="submit">Logar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;