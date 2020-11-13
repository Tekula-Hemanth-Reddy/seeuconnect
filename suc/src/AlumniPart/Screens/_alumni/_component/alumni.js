import React from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import '../_css/alumni.css';
import AdityaImage from '../../../../assets/images/Aditya.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <Container className='mainContainer'>
    <Row>
      <Col xs={7}>
      <div className="subDivision" style={{alignItems:"flex-start"}}>
          <h1 className="greetingClass">Hello!!</h1>
          <h1 className="greetingClass">Aditya Nalla</h1>
      </div>
      
      </Col>
      <Col xs={5}>
        <Image src={AdityaImage} roundedCircle  className="roundImage"/>
      </Col>
    </Row>
    
    <Row >
      <Col className="aboutMeDescCol">
        <p className="aboutMeTextData">Hello,I’m Akshay Handge Creative Graphic Designer & User Experience Desiger based in Website, I create digital Products a more Beautiful and usable place. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
        </p>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col xs={6}>
          <Card body className="cardStyle">
            <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={3} className="leftCard">
                Company
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                Tidbeat
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Phone
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="tel:+919876543210" style={{textDecoration:"none"}}>+91 9876543210</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faEnvelopeSquare} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Email
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="mailto:dummy@gmail.com" style={{textDecoration:"none"}}>dummy@gmail.com</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faMapMarkerAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Address
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="https://www.google.co.in/maps/" style={{textDecoration:"none",color:"#fff"}}>3-3-184/70,Sri KanakaDurga Enterprises,Main Road,Peddapally,Telangana</a>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={6}>
        <Card body className="cardStyle">
        <Row>
              <Col xs={1}>
                
              </Col>
              <Col xs={3} className="leftCard">
                Full Name
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                Aditya Nalla
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faPhoneAlt} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Phone
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="tel:+919876543210" style={{textDecoration:"none"}}>+91 9876543210</a>
              </Col>
            </Row>
            <Row>
              <Col xs={1} className="leftCard">
                <FontAwesomeIcon className='ico' icon={faEnvelopeSquare} color="#007bff" size="md" style={{textAlign:"left"}}/>
              </Col>
              <Col xs={3} className="leftCard">
                Email
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={6} className="rightCard">
                <a href="mailto:dummy@gmail.com" style={{textDecoration:"none"}}>dummy@gmail.com</a>
              </Col>
            </Row>
        </Card>
        <Card body className="cardStyle" style={{marginTop:"30px"}}>
            <Row>
              <Col xs={5} className="leftCard">
                Company Website
              </Col>
              <Col xs={2}>
                :
              </Col>
              <Col xs={5} className="rightCard">
                <a href="https://tidbeat.com/" style={{textDecoration:"none"}}>tidbeat.com</a>
              </Col>
            </Row>
        </Card>
        </Col>
      </Row>
    </Container>
  </Container>
  );
}

export default About;
