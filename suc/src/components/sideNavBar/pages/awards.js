import React,{Component} from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import * as BIIcons from 'react-icons/bi';
import './css/awards.css';
import authContext from '../../../context/auth-context';


export class Awards  extends Component
{
  constructor(props){
    super(props);
    this.state = {
      awardData:[]
    }
  }

  static contextType = authContext;

  componentDidMount(){

    const token = sessionStorage.getItem('userId');;

    const requestBody = {
      query: `
      query{
        users(userId:"${token}"){
          profile{
            achievements{
              title
              achievementDescription
              certificate
            }
          }
        }
      }
      `
  };

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
          this.setState({
          awardData: resData.data.users.profile.achievements
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

    render()
    {  
        return (
            <Container className="courses1Container" style={{marginLeft:"75vh"}}>
              
              <Row>
                <Col xs={1}>
                  <div>
                    <BIIcons.BiAward className="courses1Icon"/>
                  </div>
                </Col>
                <Col xs={8}>
                  <p className="courses1Text">Awards</p>
                </Col>
              </Row>

              <div>
              {this.state.awardData.map((item, index) => 
                {
                    return(
                        <Card className="awardsCardMain">
                            <Card.Body>
                                <Card.Title className="cardTitleStyle">
                                    <Row>
                                    <Col xs={1}><BIIcons.BiTrophy className="titleIconStyle3"/></Col>
                                    <Col xs={8}><p className="titleText">{item.title}</p></Col>
                                    </Row>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted subtitleText">{item.certificateId}</Card.Subtitle>
                            
                                <Card.Text className="cardText">
                                    {item.achievementDescription}
                                </Card.Text>

                                <Card.Text href="#" className="cardText">
                                <a href={item.certificate} target="_blank">{item.certificate}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
              
                })}
                
              </div>
            
            </Container>
          );

    }
  
}

export default Awards;
