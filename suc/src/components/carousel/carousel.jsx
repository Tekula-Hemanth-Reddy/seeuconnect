import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './carousel.css'
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
const fb = <FontAwesomeIcon className='ico' icon={faFacebook} color="#3b5998" size="6x"  />
const twi = <FontAwesomeIcon className='ico' icon={faTwitter} color="#00acee" size="6x" />
const insta = <FontAwesomeIcon className='ico' icon={faInstagram} color="#3f729b" size="6x" />
const element = <FontAwesomeIcon className='ico' icon={faCoffee} size="lg"  />


function carousel(){
  return (<div className='carousel'><Carousel interval='1000'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p >{fb} {twi} {insta}</p>
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
        <p>{fb} {twi} {insta}</p>
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
        <p>{fb} {twi} {insta}</p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  </div>)
}
export default carousel;
