import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import './carousel.css'
const fb = <FontAwesomeIcon className='ico' icon={faFacebook} color="#3b5998" size="6x"  />

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
        <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label {fb}</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. {fb}</p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  </div>)
}
export default carousel;
