import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/hi';
import WebCard from '../../smallCards/webCard/webCard';
import SoftwareCard from '../../smallCards/softwareCard/softwareCard';
import ApplicationsCard from '../../smallCards/applicationsCard/applicationsCard';
import LogoDesignCard from '../../smallCards/logodesignCard/logodesignCard';
import './css/about.css';


function About() {
  return (
    <Container className='mainAboutContainer'>
    <Row>
      <Col xs={1}>
        <div>
          <HIIcons.HiOutlineUser className="aboutMeIcon"/>
        </div>
      </Col>
    
      <Col xs={3}>
        <p className="aboutMeText">About Me</p>
      </Col>
    </Row>
    
    <Row >
      <Col className="aboutMeDescCol">
        <p className="aboutMeTextData">Hello,I’m Akshay Handge Creative Graphic Designer & User Experience Desiger based in Website, I create digital Products a more Beautiful and usable place. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
        </p>
      </Col>
    </Row>
    
    <Row>
      <Col>
        <Container>
          <Row>
            <Col><WebCard/></Col>
            <Col><SoftwareCard/></Col>
          </Row>
        </Container>
        
        <Container>
          <Row>
            <Col><ApplicationsCard/></Col>
            <Col><LogoDesignCard/></Col>
          </Row>
        </Container>
      </Col>
      
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
