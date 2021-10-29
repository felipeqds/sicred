import React, { useState } from 'react'
import moment from 'moment';
import Input from './Input';
import { confirmAlert } from 'react-confirm-alert'; // Import



function Create({onSubmit,title}) {
  document.title = title+" Dragões";

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      type,
      createdAt: moment().toISOString(),
      histories
    });

    setName('');
    setType('');
    setHistories('');
    
    confirmAlert({
      title: 'Item salvo',
      message: 'Item salvo com sucesso.',
      buttons: [
        {
          label: 'ok',
          onClick: () => window.location.href = "/"
        }
      ]
    });
  }

  return (
    <div className="forms">
      <form className="forms-box" onSubmit={ handleSubmit }>
        <div className="forms-box--group">
          <label htmlFor="name">Nome:</label>
          <Input type="text" name="name" id="name" value={name} onchange={e => setType(e.target.value)} />
        </div>
        <div className="forms-box--group">
          <label htmlFor="type">Tipagem:</label>
          <Input type="text" name="type" id="type" value={name} onchange={e => setType(e.target.value)} />
        </div>
        <div className="forms-box--group">
          <label htmlFor="histories">Descrição:</label>
          <textarea
            name="histories"
            id="histories"
            rows="10"
            onChange={e => setHistories(e.target.value)}
            defaultValue={ histories }
          ></textarea>
        </div>
        <div className="forms-box--group">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;