import React from 'react';
import Button from './Button';
import './components.scss'

function PageHeader(params) {
  const { title } = params;

  const logout = () => {
    localStorage.removeItem('logged');
    window.location.reload();
  }
  const listagem = () => {
    window.location.href = "/";
  }


  return (
    <div className="pageHeader">
      <h2>{ title }</h2>
      <Button onClick={listagem} label="Listagem!" />
      <Button onClick={logout} label="Sair!" />
    </div>
  )
}

export default PageHeader;