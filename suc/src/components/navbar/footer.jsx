import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
const fb = <FontAwesomeIcon className='ico' icon={faFacebook} color="#3b5998" size="lg"  />
const twi = <FontAwesomeIcon className='ico' icon={faTwitter} color="#00acee" size="lg" />
const insta = <FontAwesomeIcon className='ico' icon={faInstagram} color="#3f729b" size="lg" />
const element = <FontAwesomeIcon className='ico' icon={faCoffee} size="lg"  />
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "20%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div className='footer' style={style}>
            <div className='row'>
            <div className='col-md-4'>{fb}</div>
            <div className='col-md-4'>{twi}</div>
            <div className='col-md-4'>{insta}</div>
            
            </div>
                { children }
            </div>
        </div>
    )
}

export default Footer;
