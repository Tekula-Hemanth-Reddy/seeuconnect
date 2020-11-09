import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import ProfessionalSkillsCard from '../../skillsSubCards/professionalSkillsCard/professionalSkillsCard';
import TeluguCard from '../../skillsSubCards/languagesCard/teluguCard';
import HindiCard from '../../skillsSubCards/languagesCard/hindiCard';
import EnglishCard from '../../skillsSubCards/languagesCard/englishCard';
import FrenchCard from '../../skillsSubCards/languagesCard/frenchCard';
import './css/skills.css';

function Skills() {
  return (
    <Container className="skillsContainer">
      
      <Row>
          <Col xs={1}>
            <div>
              <HIIcons.FaRegLightbulb className="skillsIcon"/>
            </div>
          </Col>
          <Col xs={8}>
            <p className="skillsText">Skills</p>
          </Col>
      </Row>

      <Row >
        <Col className="skillsDescCol">
          <p className="skillsTextData">Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpuate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
          </p>
        </Col>
      </Row>

      <Row>
      <Col xs={1}><div><HIIcons.FaTags className="tagIcon"/></div></Col>
      <Col md="auto" ><p style={{marginRight:"10px"}}>#graphicdesign</p></Col>
      <Col md="auto"><p>#photography</p></Col>
      <Col md="auto"><p>#technology</p></Col>
      <Col md="auto"><p>#design</p></Col>
      <Col md="auto"><p>#webdevelopment</p></Col>
      <Col md="auto"><p>#application</p></Col>
      
      </Row>

      
      <ProfessionalSkillsCard/>
      
      <Row>
          <p className="languageHeader">Language Skills</p>
      </Row>

      <Row>
        <Col md="auto"><EnglishCard/></Col>
        <Col md="auto"><FrenchCard/></Col>
        <Col md="auto"><TeluguCard/></Col>
        <Col md="auto"><HindiCard/></Col>
      </Row>


    </Container>
  );
}

export default Skills;
