import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fi';
import EmailCard from '../../contactCards/emailCard/emailCard';
import AddressCard from '../../contactCards/addressCard/addressCard';
import PhoneCard from '../../contactCards/phoneCard/phoneCard';
import MessageCard from '../../contactCards/messageCard/messageCard';
import './css/contact.css';

function Contact() {
  return (
    <Container className="mainContainer">
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

      <Row >
        <Col className="contactMeDescCol">
          <p className="contactMeTextData">Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
          </p>
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
