import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import Follow from '../followApps/followApps';
import './carousel.css';

function carousel(){
  return (
  <div className='carousel'>
    <Carousel interval='1000'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <Follow />
    </div>
  </div>
  )
}
export default carousel;
