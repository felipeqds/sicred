import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './global.scss';
import Login from './views/Login/';
import List from './views/Dragons/index';
import Create from './views/Dragons/Create';
import Edit from './views/Dragons/Edit';
import Detail from './views/Dragons/Detail';

const isLogged = localStorage.getItem('logged');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          { isLogged ? <Redirect to="/dragons" /> : <Login /> }
        </Route>
        <Route exact path="/dragons">
        { isLogged ? <List /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dragons/create">
        { isLogged ? <Create /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dragons/edit/:dragonId">
        { isLogged ? <Edit /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dragons/detail/:dragonId">
        { isLogged ? <Detail /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('index')
);