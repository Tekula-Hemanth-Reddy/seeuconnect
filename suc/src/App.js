import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
import Home from './screens/home.jsx'
import LoginSignup from './screens/loginSignup/loginSignup.jsx';
function App() {
  return (
    <div className="App">
      <Home/>
      <LoginSignup/>
    </div>
  );
}

export default App;
