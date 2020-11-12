import React from 'react';
import {Container,Row,Col,Button,Image} from 'react-bootstrap';
import '../_css/alumni.css';
import AdityaImage from '../../../assets/images/Aditya.png';


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
    
    <Row>
      
      <Col >
        <Container>
          <Row className="headerRow">
            <Col xs={6} className="headerCol"><h4>Personal Details</h4></Col>
          </Row>
          
          <Row className="commonRow">
            <Col xs={3}>Full Name</Col>
            <Col xs={1}>:</Col>
            <Col xs={6}><p className="commonPara">Hemanth Tekula</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Father's Name</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">Malla Reddy Tekula</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Address</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">Chityal,Nalgonda,Telangana</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Zip Code</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">505172</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Phone</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">9381201545</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Email</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">tekulahemanth@gmail.com</p></Col>
          </Row>

          <Row className="commonRow">
            <Col xs={3} ><p className="commonPara">Website</p></Col>
            <Col xs={1} >:</Col>
            <Col xs={6} ><p className="commonPara">http://www.hemanth.com</p></Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
  );
}

export default About;
