import React,{Component} from 'react';
import { Container,Row,Col,Card,ProgressBar} from 'react-bootstrap';
import authContext from '../../../context/auth-context';
import './styles/styles.css';

class ProfessionalSkillsCard extends Component
{
    constructor(props){
        super(props);
        this.state = {skillData: []};
      }
    
      static contextType = authContext;
    
      componentDidMount(){
    
        const token = this.context.userId;
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
              profile{
                skills{
                  skill
                  rating
                }
              }
            }
          }
          `
      };
    
      // const token = this.context.token;
    
      fetch('http://localhost:4000/graphql', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                  'Content-Type': 'application/json',
                  // 'Authorization': 'Bearer ' + token
              }
          }).then(res => {
              if(res.status!== 200 && res.status!== 201){
                  throw new Error('Failed!');
              }
              return res.json();
          })
          .then(resData => {
            console.log(token);
            this.setState({skillData: resData.data.users.profile.skills});
          })
          .catch(err => {
              console.log(err);
          });
      }
    render(){
        return(
            <Card className="pSkillsCardMainContainer">
            <Container >
                <Row><Col xs={5}><p className="titleStyle">Professional Skills</p></Col></Row>
                {
                    this.state.skillData.map(item =>(
                        <Row>
                            <Col xs={5}><p className="subTitles">{item.skill}</p></Col>
                            <Col>
                                <ProgressBar animated variant="ifo" now={item.rating} label={item.rating} style={{marginTop:"8px"}}></ProgressBar>
                            </Col>
                        </Row>
                    ))
                }
                {/* <Row>
                    <Col xs={2}><p className="subTitles">PhotoShop</p></Col>
                    <Col>
                        <ProgressBar animated variant="custom" now={40} label={40} style={{marginTop:"8px"}}></ProgressBar>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={2}><p className="subTitles">Html5</p></Col>
                    <Col>
                        <ProgressBar animated variant="success" now={80} label={80} style={{marginTop:"8px"}}></ProgressBar>
                    </Col>
                </Row>

                <Row>
                    <Col xs={2}><p className="subTitles">JQuery</p></Col>
                    <Col>
                        <ProgressBar animated variant="info" now={30} label={30} style={{marginTop:"8px"}}></ProgressBar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}><p className="subTitles">Android</p></Col>
                    <Col>
                        <ProgressBar animated variant="danger" now={50} label={50} style={{marginTop:"8px"}}></ProgressBar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}><p className="subTitles">Marketing</p></Col>
                    <Col>
                        <ProgressBar animated variant="warning" now={60} label={60} style={{marginTop:"8px"}}></ProgressBar>
                    </Col>
                </Row> */}


            </Container>
            </Card>
        );
    }
}

export default ProfessionalSkillsCard;