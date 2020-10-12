import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home.jsx'
function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="outline-warning">Warning</Button>{' '}
      </header>
    </div>
  );
}

export default App;
