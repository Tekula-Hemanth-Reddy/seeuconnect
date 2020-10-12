import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.jsx'
import Carousel from './components/carousel.jsx'
import ReactBootstrap, {Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
