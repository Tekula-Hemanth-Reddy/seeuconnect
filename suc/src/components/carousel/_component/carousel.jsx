import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import firstImage from '../../../assets/images/background.png';
import '../_css/carousel.css';

function carousel(){
  return (
  <div className='carousel'>
    <Carousel interval='1000'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Graduate</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Build your Profile</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Get to Work </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}
export default carousel;
