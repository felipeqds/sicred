import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../api';


function EditDragon() {
    document.title = "Drago333ns :: Edit";

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


    return (
      <div className="forms">
        <form className="forms-box">
          <div className="forms-box--group">
            <label htmlFor="name">Nome:</label>
            {name}
          </div>
          <div className="forms-box--group">
            <label htmlFor="type">Tipagem:</label>
            {type}
          </div>
          <div className="forms-box--group">
            <label htmlFor="histories">Descrição:</label>
            { histories }
          </div>
        </form>
      </div>
    );
  }

export default EditDragon;