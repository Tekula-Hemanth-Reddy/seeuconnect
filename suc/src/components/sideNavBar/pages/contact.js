import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import EmailCard from '../../contactCards/emailCard/emailCard';
import AddressCard from '../../contactCards/addressCard/addressCard';
import PhoneCard from '../../contactCards/phoneCard/phoneCard';
import MessageCard from '../../contactCards/messageCard/messageCard';
import './css/contact.css';

function Contact() {
  return (
    <Container className="mainContactContainer">
      <Row>
        <Col xs={1}>
          <div>
            <HIIcons.FiMail className="contactMeIcon"/>
          </div>
        </Col>
        <Col xs={3}>
          <p className="contactMeText">Contact Me</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col><EmailCard/></Col>
            </Row>
            <Row>
              <Col><PhoneCard/></Col>
            </Row>
            <Row>
              <Col><AddressCard/></Col>
            </Row>
            <Row style={{margin:"20px 10px 10px 10px"}}>
              <Col md="auto">
                <FaIcons.FaInstagram className="socialIcons"/>
              </Col>
              <Col md="auto">
                <FaIcons.FaFacebook className="socialIcons"/>
              </Col>
              <Col md="auto">
                <FaIcons.FaGithub className="socialIcons"/>
              </Col>
              <Col md="auto">
                <FaIcons.FaTwitter className="socialIcons"/>
              </Col>
              <Col md="auto">
                <FaIcons.FaLinkedin className="socialIcons"/>
              </Col>
            </Row>
          </Container>
        </Col>
        
        <Col>
          <Container>
            <Row>
              <MessageCard/>
            </Row>
          </Container>
        </Col>
      </Row>



    </Container>
  );
}

export default Contact;
