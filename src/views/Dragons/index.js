import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import PageHeader from '../../components/Header';

import api from '../../api';
import moment from 'moment';

import './style.scss'

function Dragons() {
    document.title = "Listar Dragões";

    const [dragons, setDragons] = useState([]);

    const title = `Listagem total: ${dragons.length}`;

    useEffect(() => {
      async function getDragons() {
        const response = await api.get('/');
        const data = response.data.sort(function(a,b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        setDragons(data);
      }
      getDragons();
    }, []);

    async function edit(id) {
      window.location.href = "/dragons/edit/"+id;
    }
    async function view(id) {
      window.location.href = "/dragons/detail/"+id;
    }

    async function create() {
      window.location.href = "/dragons/create/";
    }

    async function removeDragon(id) {
      await api.delete(`/${id}`);
      window.location.reload();
    }

    async function submit(id) {
      confirmAlert({
        title: 'Exclusão de item',
        message: 'Voce tem certeza que quer fazer isso?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => removeDragon(id)
          },
          {
            label: 'Não',
            onClick: () => {}
          }
        ]
      });
    };

    return (
      <div className="dragons">
          <PageHeader title={ title } />
          <button className="button" onClick={ () => create()}>Registrar Dragão</button>
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Nome</th>
                <th>Raça</th>
                <th>Nascimento</th>
              </tr>
            </thead>
            <tbody>
              {dragons.map(dragon => (
                <tr key={ dragon.id }>
                <td>                            
                  <img onClick={ () => view(dragon.id)} src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="View button" width="25px" />
                  <img onClick={ () => edit(dragon.id)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Feedbin-Icon-home-edit.svg/34px-Feedbin-Icon-home-edit.svg.png" alt="Edit button" width="25px" />
                  <img onClick={ () => submit(dragon.id)} src="https://cdn.icon-icons.com/icons2/868/PNG/512/trash_bin_icon-icons.com_67981.png" alt="Delete button" width="25px" />                            
                </td>
                  <td>{ dragon.name}</td>
                  <td>{ dragon.type}</td>
                  <td>{moment(dragon.createdAt).format('DD/MM/YYYY')}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
}

export default Dragons;