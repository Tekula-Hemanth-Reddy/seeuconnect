import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

var style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "20%",
}

var phantom = {
  display: 'inline',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Follow() {
    return (
        <div>
            <div style={phantom} />
                <div className='footer' style={style}>
                    <div className='row'>
                        <div className='col-md-4'><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faFacebook} color="#3b5998" size="lg" /> }</a></div>
                        <div className='col-md-4'><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faTwitter} color="#00acee" size="lg" /> }</a></div>
                        <div className='col-md-4'><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faInstagram} color="#3f729b" size="lg" /> }</a></div>
                </div>
            </div>
        </div>
    )
}

export default Follow;
