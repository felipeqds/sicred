import React, { useEffect, useState } from 'react';
import Details from '../../components/Detail';
import api from '../../api';
import { useParams } from 'react-router';
import PageHeader from '../../components/Header';
import './style.scss';


function Edit() {
  document.title = "Detalhes Dragões";

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
      <PageHeader title="Detalhar / Dragões"/>
      <Details data={{...response.data}} title="Detalhar" />
    </div>
  );
}

export default Edit;