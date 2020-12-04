import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout'
import Project from './components/projects'
import Storie from './components/stories'
import Ticket from './components/tickets'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/storie" component={Storie} />
          <Route exact path="/ticket" component={Ticket} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
