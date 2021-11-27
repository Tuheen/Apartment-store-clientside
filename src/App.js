import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import { Switch } from 'react-router-dom';
import Explore from './Pages/Explore/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
              <PrivateRoute path="/explore">
                <Explore />
              </PrivateRoute>
              
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
