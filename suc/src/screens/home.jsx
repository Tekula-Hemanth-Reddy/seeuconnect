import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../components/navbar/navbar.jsx'
import Carousel from './../components/carousel/carousel.jsx'
import ReactBootstrap, {Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'
function home(){
  return (<div>
    <Navbar/>
    <Carousel/>
  </div>);
}

export default home;
