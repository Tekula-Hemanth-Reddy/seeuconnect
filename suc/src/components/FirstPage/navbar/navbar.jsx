import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Button,Image } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router} from 'react-router-dom';
import history from '../../../history/history';


function navbar(){
  return (
    <Router>
    <div className='nav'>
      <Navbar fixed="top" bg="#000000" variant="dark">
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="See U Connect" style={{height:"60px",width:"75px"}}/>
          See U Connect
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='mr'>
              <Nav className="mr-auto float-right">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="#features">About</Nav.Link> */}
                {/* <Nav.Link href="/contactUs">Contact Us</Nav.Link> */}
              </Nav>
            </div>
          </Navbar.Collapse>
          <Button className='personLogin' variant="outline-primary float-right" onClick={() => history.push('/admin')}>
        Admin</Button>
        <Button className='personLogin' variant="outline-primary float-right" onClick={() => history.push('/login')}>
        {<FontAwesomeIcon icon={faUser} />}</Button>
      </Navbar>
    </div>
  </Router>
  )
}
export default navbar;
