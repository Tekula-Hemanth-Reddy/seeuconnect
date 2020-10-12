import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../components/navbar/navbar.jsx'
import Carousel from './../components/carousel/carousel.jsx'
function home(){
  return (<div>
    <Navbar/>
    <Carousel/>
  </div>);
}

export default home;
