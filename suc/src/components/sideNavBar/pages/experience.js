import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './css/experience.css';
import CompanyExperienceCard from '../../companyExperienceCard/companyExperienceCard';
import TrophyCard from '../../awardCards/trophyCard/trophyCard';
import GeneralAward from '../../awardCards/generalAward/generalAward';

function Experience() {
  return (
    <Container className="experienceContainer">
      
      <Row>
        <Col xs={1}>
          <div>
            <HIIcons.FaPencilAlt className="experienceIcon"/>
          </div>
        </Col>
        <Col xs={8}>
          <p className="experienceText">Work Experience</p>
        </Col>
      </Row>


    <Row style={{marginLeft:"20px",marginTop:"20px"}}>
      <Col >
        <Container>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
          <Row>
            <Col><CompanyExperienceCard/></Col>
          </Row>
        </Container>
      </Col>
      
    </Row>

    </Container>
  );
}

export default Experience;
