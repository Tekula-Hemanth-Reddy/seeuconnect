import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Button } from 'react-bootstrap';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

function navbar(){
  return (
    <div className='nav'>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">See U Connect</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='mr'>
              <Nav className="mr-auto float-right">
                <Nav.Link href="#home">Latest</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        <Button className='personLogin' variant="outline-primary float-right">{<FontAwesomeIcon icon={faUser} />}</Button>
    </Navbar>
  </div>
  )
}
export default navbar;
