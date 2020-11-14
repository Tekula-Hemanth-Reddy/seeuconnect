import React, { Component } from 'react';
<<<<<<< HEAD
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import EducationSmallCard from '../../educationSmallCard/component/educationSmallCard';
import './css/education.css';
=======
>>>>>>> 0b7f92959e3e42b7b219970af07cec1df464533b

export class Education extends Component
{
  render()
  {
    return (
      <Container className='mainContainer'>
        <Row>
          <Col xs={1}>
            <div>
              <HIIcons.FaGraduationCap className="educationIcon"/>
            </div>
          </Col>
        
          <Col xs={3}>
            <p className="educationText">Education</p>
          </Col>
        </Row>

        <Row>
          <EducationSmallCard/>
        </Row>

      </Container>
    );
  }
  
}

export default Education;
