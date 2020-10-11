import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="outline-warning">Warning</Button>{' '}
      </header>
    </div>
  );
}

export default App;
