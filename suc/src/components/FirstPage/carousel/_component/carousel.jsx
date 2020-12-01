import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import buildImage from '../../../../assets/images/background/build.jpg';
import getToWork from '../../../../assets/images/background/gettowork.jpg';
import graduate from '../../../../assets/images/background/graduate.jpg';
import '../_css/carousel.css';

function carousel(){
  return (
  <div className='carousel'>
    <Carousel interval='1000'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={graduate}
          alt="Graduate"
        />
        <Carousel.Caption>
        <h1 style={{color:"#002b88"}}>Graduate</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={buildImage}
          alt="Build your Profile"
        />
        <Carousel.Caption>
        <h1 style={{color:"#002b88"}}>Build your Profile</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={getToWork}
          alt="Get to Work "
        />
        <Carousel.Caption>
          <h1 style={{color:"#002b88"}}>Get to Work </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}
export default carousel;
