import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactBootstrap, {Navbar,Nav,Form,FormControl,Button,DropdownButton,Dropdown,NavItem} from 'react-bootstrap'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { BsFillPersonFill } from "react-icons/bs";
const user = <FontAwesomeIcon icon={faUser} />

function navbar(){
  return (
    <div className='nav'>
    <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">See U Connect</Navbar.Brand>
    <div className='mr'>
    <Nav className="mr-auto float-right">
      <Nav.Link href="#home">Latest</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
    </Nav>

    </div>
<Button variant="outline-primary float-right">{user}<i class="fab fa-instagram"></i></Button>

  </Navbar>

  </div>
  )
}
export default navbar;
