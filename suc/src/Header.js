import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';

function Header()
{
    return(
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Common NavBar
        </Navbar.Brand>
      </Navbar>
        </div>
    );
}

export default Header;