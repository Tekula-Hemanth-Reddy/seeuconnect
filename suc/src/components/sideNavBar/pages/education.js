import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import EducationSmallCard from '../../educationSmallCard/component/educationSmallCard';
import './css/education.css';

export class Education extends Component
{
  render()
  {
    return (
      <Container className='mainEducationContainer'>
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
