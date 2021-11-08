import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../api';
import Input from './Input';


function EditDragon() {
document.title ="Editar Dragões";
    const { dragonId } = useParams();
    const [dragon, setDragon] = useState({})
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [histories, setHistories] = useState('');


    useEffect(() => {
      async function getDragon() {
        const response = await api.get(`/${dragonId}`);
        setDragon(response.data);
        setName(dragon.name);
        setType(dragon.type);
        setHistories(dragon.histories);
      }
      getDragon();
    }, [dragon.histories, dragon.name, dragon.type, dragonId]);

    async function handleUpdateDragon(e) {
      e.preventDefault();
      const data = { name, type, histories };
      const response = await api.put(`/${dragonId}`, data);
      setDragon(response.data);

      window.location.reload();
    }

    return (
      <div className="forms">
        <form className="forms-box" onSubmit={ handleUpdateDragon }>
          <div className="forms-box--group">
            <label htmlFor="name">Nome:</label>
            <Input type="text" name="name" id="name" value={name} onchange={e => setName(e.target.value)} />
          </div>
          <div className="forms-box--group">
            <label htmlFor="type">Tipagem:</label>
            <Input type="text" name="type" id="type" value={type} onchange={e => setType(e.target.value)} />
          </div>
          <div className="forms-box--group">
            <label htmlFor="histories">Descrição:</label>
            <textarea
              name="histories"
              id="histories"
              rows="10"
              onchange={e => setHistories(e.target.value)}
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

export default EditDragon;
