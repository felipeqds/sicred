import React, { useState } from 'react'
import Form from '../../components/FormCreate';
import api from '../../api';
import PageHeader from '../../components/Header';
import './style.scss';


function Create() {
  document.title = "Criação Dragões";

  const [dragons, setDragons] = useState([]);

  async function handleAddDragon(data) {
    const response = await api.post('/', data);
    setDragons([...dragons, response.data]);
  }

  return (
    <div className="dragons">
      <PageHeader title="Criação / Dragões"/>
      <Form onSubmit={handleAddDragon} title="Cadastrar" data={{}} />
    </div>
  );
}

export default Create;