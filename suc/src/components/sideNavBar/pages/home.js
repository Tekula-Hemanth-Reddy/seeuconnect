import React from 'react';
import {Col, Container, Row,Button} from 'react-bootstrap';
import './css/home.css';
import Image from 'react-bootstrap/Image';
import AdityaImage from '../../../assets/images/background.png';


function Home() {
  return (
    
    <Container className="mainContainer">
      <Row>
      <Col xs={6}>
      <div className="subDivision" style={{alignItems:"flex-start"}}>
          <h1 className="greetingClass">Hello!!</h1>
          <h1 className="greetingClass">My Name is</h1>
          <h1 className="greetingClass">Firebase</h1>
          <Button href="#" className="portfolioBtn" variant="primary" size="lg">Visit My PortFolio</Button>
      </div>
      
      </Col>
      <Col xs={6}>
      <Image src={AdityaImage} roundedCircle  className="roundImage"/>
      </Col>
      </Row>
    </Container>
    
  );
}

export default Home;
