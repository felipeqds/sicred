import React, { useEffect, useState } from 'react';
import Form from '../../components/FormEdit';
import api from '../../api';
import { useParams } from 'react-router';
import PageHeader from '../../components/Header';
import './style.scss';


function Edit() {
  document.title = "Editar Dragões";

  const { dragonId } = useParams();

  const [response, setResponse] = useState("");

  useEffect(() => {
    async function getDragon() {
      const response = await api.get(`/${dragonId}`);
      setResponse(response);
    }
    getDragon();
}, []);



  return (
    <div className="dragons">
      <PageHeader title="Editar / Dragões"/>
      <Form onSubmit={{}} data={{...response.data}} title="Editar" />
    </div>
  );
}

export default Edit;