import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Button,Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import history from '../../../../history/history';
import {BrowserRouter as Router} from 'react-router-dom';
import authContext from '../../../../context/auth-context';
import Logo from '../../../../assets/images/logo.png';
import '../css/alumniNavbar.css'

const AlumniNavBar =props => {
    return(
        <authContext.Consumer>
            {(context)=>{
            return(
                <Router>
                    <div className='nav'>
                    <Navbar fixed="top" bg="#1f1f1f" variant="dark">
                        <Navbar.Brand href="#home">
                        <Image src={Logo} alt="See U Connect" style={{height:"60px",width:"75px"}}/>
                            See U Connect
                            </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='mr'>
                            <Nav className="mr-auto float-right">
                                <Nav.Link href="#" onClick={()=>history.push('/alumniProfile')}>About</Nav.Link>
                                <Nav.Link href="#" onClick={()=>history.push('/requirement')}>Recruitment</Nav.Link>
                                <Nav.Link href="#" onClick={()=>history.push('/details')}>Edit</Nav.Link>
                            </Nav>
                            </div>
                        </Navbar.Collapse>
                        <Button className='personLogin' href="/home"  variant="outline-primary float-right" onClick={context.logout}>
                        {<FontAwesomeIcon icon={faSignOutAlt} />}</Button>
                    </Navbar>
                    </div>
                </Router>
                );
            }}
        </authContext.Consumer>
        );
}

export default AlumniNavBar;