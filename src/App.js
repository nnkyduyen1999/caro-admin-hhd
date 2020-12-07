import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
