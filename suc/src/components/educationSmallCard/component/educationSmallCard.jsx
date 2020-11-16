import React,{Component} from 'react';
import {Accordion,Card,Button,Container,Row,Col} from 'react-bootstrap';
import {EducationData} from '../../sideNavBar/pages/data/education';
import * as HIIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import '../styles/styles.css';


export class EducationSmallCard extends Component
{
    render()
    {
        return(
            <div>
        {EducationData.map((item, index) => {
            return (
                <Accordion key={index}>
                    <Card className="smallCardContainer">
                        <Card.Header style={{textAlign:"left"}}>
                            <Container>
                                <Row>
                                    <Col xs={2} className="iconBorderColorCol">
                                        <HIIcons.FaPencilAlt className="pencilIcon"/>
                                    </Col>
                                    <Col xs={8}  className="headingTitle">
                                        <p  className="courseTitle" >{item.title}</p> 
                                        <p className="schoolText" style={{display:"inline"}}>{item.school}</p>
                                        <p className="yearText" style={{display:"inline"}}> -{item.year}</p>
                                        </Col>
                                    <Col xs={2} style={{textAlign:"right"}} className="iconBorderColorCol">
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <AiIcons.AiOutlinePlus className="plusIcon"/>
                                    </Accordion.Toggle>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Header>
                       
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div>
                                    <p className="descriptionText"> {item.title} has been done in {item.school} during the year {item.year} 
                                    which is affiliated to board {item.board}. Passed out with Grade {item.grade}  </p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
          })}

          </div>

        );
    }

} 

export default EducationSmallCard;