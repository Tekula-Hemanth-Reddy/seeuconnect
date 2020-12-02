import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import './styles/styles.css';

export  class Schooling extends Component
{
    constructor(props){
        super(props);
        this.state = {
          sn:"",
          sg:"",
          sb:"",
          sy:""
        }
      }
    
      static contextType = authContext;
    
      componentDidMount(){
    
        const token = sessionStorage.getItem('userId');
    
        const requestBody = {
          query: `
          query{
            users(userId:"${token}"){
                profile{
                education{
                  school{
                    schoolName
                    schoolGrade
                    schoolBoard
                    schoolYear
                  }
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
              this.setState({
                sn : resData.data.users.profile.education.school.schoolName,
                sg : resData.data.users.profile.education.school.schoolGrade,
                sb : resData.data.users.profile.education.school.schoolBoard,
                sy : resData.data.users.profile.education.school.schoolYear
            });
          })
          .catch(err => {
              console.log(err);
          });
      }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render()
    {
        const { values, inputChange } = this.props;
    return(
        <Container className="schoolContainer">
        <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>

            <Row>
                <Col><p className="titleStyle">Secondary(X) Details</p></Col>
            </Row>

            <Row>
                <p className="titleSchool">School</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control size="text" 
                                type="text" 
                                placeholder="e.g. Delhi Public School "
                                defaultValue={this.state.sn}
                                required
                                onChange={inputChange('schoolName')} value={values.schoolName} />
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <p className="titleSchool">Board</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <Form className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                required
                                placeholder="e.g. CBSE "
                                defaultValue={this.state.sb} 
                                onChange={inputChange('schoolBoard')} value={values.schoolBoard}    />
                            <br />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <p className="titleSchool">Year of Completion</p>
            </Row>

            <Row className="formSchoolRow2">
                <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label></Form.Label>
                            <Form.Control 
                            as="select"
                            required
                            defaultValue={this.state.sy}
                            onChange={inputChange('ySchool')} value={values.ySchool}
                            >
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                
                </Col>
            </Row>

            <Row>
                <Col xs={1} md="auto">
                    <p className="gradeTitle">Grade</p>
                </Col>

                <Col md="auto">
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="9.86"
                                id="id1"
                                required
                                title="Enter a Correct cgpa Value;it lies between 0 and 10"
                                defaultValue={this.state.sg}
                                onChange={inputChange('schoolGrade')} value={values.schoolGrade}/>
                            <br />
                        </Form.Group>
                    </Form>
                
                </Col>
            </Row>

            <Row style={{textAlign:"right"}}>
                <Col>
                    <Button className="buttonRow" size="lg" variant="outline-primary"  onClick={this.continue}>Next</Button>{' '}
                </Col>
            </Row>
            </Card>
        </Container>

    );

    }
}

export default Schooling;