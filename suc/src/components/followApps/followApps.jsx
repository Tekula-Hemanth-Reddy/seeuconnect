import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

function Follow() {
    return (
        <div>
            <div className='footerFollow'>
                <div className='col'>
                    <div className='col-md-4'><Button className="followButton" variant="transparent"><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faFacebook} color="#3b5998" size="lg" /> }</a></Button></div>
                    <div className='col-md-4'><Button className="followButton" variant="transparent"><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faTwitter} color="#00acee" size="lg" /> }</a></Button></div>
                    <div className='col-md-4'><Button className="followButton" variant="transparent"><a href="#" target="_blank" rel="noopener noreferrer">{ <FontAwesomeIcon className='ico' icon={faInstagram} color="#fa7864" size="lg" /> }</a></Button></div>
                </div>
            </div>
        </div>
    )
}

export default Follow;
