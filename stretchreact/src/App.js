import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import UserList from './components/UserList';
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"></Route>
          <PrivateRoute  exact path="/userlist" component={UserList}></PrivateRoute>
          <Route path="/login"><Login></Login></Route>
          <Route path="/register"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
