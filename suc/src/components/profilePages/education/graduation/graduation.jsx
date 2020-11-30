import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Card} from 'react-bootstrap';
import authContext from '../../../../context/auth-context';
import history from '../../../../history/history';
import './styles/styles.css';

export class Graduation extends Component
{
    constructor(props){
        super(props);
        this.state = {
          gn:"",
          gg:"",
          gu:"",
          gc:"",
          gs:"",
          gsy:"",
          gey:""
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
                  graduation{
                    graduationCollegeName
                    graduationCollegeGrade
                    graduationUniversity
                    graduationCourse
                    graduationStream
                    graduationStartYear
                    graduationEndYear
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
                gn : resData.data.users.profile.education.graduation.graduationCollegeName,
                gg : resData.data.users.profile.education.graduation.graduationCollegeGrade,
                gu : resData.data.users.profile.education.graduation.graduationUniversity,
                gc : resData.data.users.profile.education.graduation.graduationCourse,
                gs : resData.data.users.profile.education.graduation.graduationStream,
                gsy: resData.data.users.profile.education.graduation.graduationStartYear,
                gey: resData.data.users.profile.education.graduation.graduationEndYear
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

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render()
    {
        const { values, inputChange } = this.props;
        const submitHandler = () =>{
            const NewschoolName= ""+this.props.values.schoolName;
            const NewySchool= Number(""+this.props.values.ySchool);
            const NewschoolGrade= ""+this.props.values.schoolGrade;
            const NewschoolBoard= ""+this.props.values.schoolBoard;
            const NewsecondarySchoolName= ""+this.props.values.secondarySchoolName;
            const NewySecondarySchool= 2016;
            const NewsecondarySchoolGrade= ""+this.props.values.secondarySchoolGrade;
            const NewsecondarySchoolBoard= ""+this.props.values.secondarySchoolBoard;
            const NewsecondarySchoolStream= ""+this.props.values.secondarySchoolStream;
            const NewcollegeName= ""+this.props.values.collegeName;
            const NewyCollegeStart= Number(""+this.props.values.yCollegeStart);
            const NewyCollegeEnd= Number(""+this.props.values.yCollegeEnd);
            const NewcollegeGrade= ""+this.props.values.collegeGrade;
            const NewcollegeStream= ""+this.props.values.collegeStream;
            const NewcollegeCourse= ""+this.props.values.collegeCourse;
            const NewcollegeBoard= ""+this.props.values.collegeBoard;
            
            // console.log(
            //     NewschoolName,
            //     NewySchool,
            //     NewschoolGrade,
            //     NewschoolBoard,
            //     NewsecondarySchoolName,
            //     NewySecondarySchool,
            //     NewsecondarySchoolGrade,
            //     NewsecondarySchoolBoard,
            //     NewsecondarySchoolStream,
            //     NewcollegeName,
            //     NewyCollegeStart,
            //     NewyCollegeEnd,
            //     NewcollegeGrade,
            //     NewcollegeStream,
            //     NewcollegeCourse,
            //     NewcollegeBoard,);
    
            const requestBody = {
                query: `
                mutation{
                    UpdateEducation(educationInput:{schoolName:"${NewschoolName}",schoolGrade:"${NewschoolGrade}",schoolBoard:"${NewschoolBoard}",schoolYear:${NewySchool},collegeName:"${NewsecondarySchoolName}",collegeGrade:"${NewsecondarySchoolGrade}",collegeCourse:"${NewsecondarySchoolStream}",collegeBoard:"${NewsecondarySchoolBoard}",collegeYear:${ NewySecondarySchool},graduationCollegeName:"${NewcollegeName}",graduationCollegeGrade:"${NewcollegeGrade}",graduationUniversity:"${NewcollegeBoard}",graduationCourse:"${NewcollegeCourse}",graduationStream:"${NewcollegeStream}",graduationStartYear:${NewyCollegeStart},graduationEndYear:${NewyCollegeEnd}}){
                      _id
                    }
                  }
                `
            };
    
            const token = sessionStorage.getItem('token');
    
            fetch('http://localhost:4000/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(res => {
                if(res.status!== 200 && res.status!== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {
                history.push('/profile/edit');
            })
            .catch(err => {
                console.log(err);
            });
        };    
    return(
        <Container className="schoolContainer">
            <Form onSubmit={submitHandler}>
        <Card style={{borderColor:"#007fbb",borderWidth:"2px",width:"90%",backgroundColor:"transparent",padding:"20px"}}>
            <Row>
                <Col><p className="titleStyle">Graduation Details</p></Col>
            </Row>

            <Row>
                <p className="titleSchool">College</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <div className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. Vasavi College of Engineering "
                                defaultValue={this.state.gn} 
                                onChange={inputChange('collegeName')} 
                                value={values.collegeName}/>
                            <br />
                        </Form.Group>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>	   
	                <Row>
                        <p className="titleSchool">Year of Start</p>
                    </Row>

                    <Row className="formSchoolRow2">
                        <Col>
                            <div>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                    as="select"
                                    defaultValue={this.state.gsy}
                                    onChange={inputChange('yCollegeStart')} 
                                    value={values.ycollegeStart}
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
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p className="titleSchool">Year of End</p>
                    </Row>

                    <Row className="formSchoolRow2">
                        <Col>
                            <div>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label></Form.Label>
                                    <Form.Control 
                                        as="select"
                                        defaultValue={this.state.gey}
                                        onChange={inputChange('yCollegeEnd')} 
                                        value={values.ycollegeEnd}>
                                        <option>2030</option>
                                        <option>2029</option>
                                        <option>2028</option>
                                        <option>2027</option>
                                        <option>2026</option>
                                        <option>2025</option>
                                        <option>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
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
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            	
            <Row>
                <Col>
                    <Row>
                            <p className="titleSchool">Course</p>
                        </Row>

                        <Row className="formSchoolRow">
                            <Col>
                                <div className="formSchool">
                                    <Form.Group>
                                        <Form.Control 
                                            size="text" 
                                            type="text" 
                                            placeholder="e.g. B.E/B.TECH "
                                            defaultValue={this.state.gc}
                                            onChange={inputChange('collegeCourse')} 
                                            value={values.collegeCourse} />
                                        <br />
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                </Col>

                <Col>
                            <Row>
                                <p className="titleSchool">Stream</p>
                            </Row>

                            <Row className="formSchoolRow">
                                <Col>
                                    <div className="formSchool">
                                        <Form.Group>
                                            <Form.Control 
                                                size="text" 
                                                type="text" 
                                                placeholder="e.g. CSE "
                                                defaultValue={this.state.gs}
                                                onChange={inputChange('collegeStream')} 
                                                value={values.collegeStream} />
                                            <br />
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                </Col>
            </Row>
           

            <Row>
                <p className="titleSchool">Board / University</p>
            </Row>

            <Row className="formSchoolRow">
                <Col>
                    <div className="formSchool">
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="text" 
                                placeholder="e.g. TSBIE "
                                defaultValue={this.state.gu}
                                onChange={inputChange('collegeBoard')} 
                                value={values.collegeBoard}/>
                            <br />
                        </Form.Group>
                    </div>
                </Col>
            </Row>

           

            <Row>
                <Col xs={1} md="auto">
                    <p className="gradeTitle">CGPA</p>
                </Col>

                <Col md="auto">
                    <div>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="number" 
                                placeholder="8.7 "
                                defaultValue={this.state.gg} 
                                onChange={inputChange('collegeGrade')} 
                                value={values.collegeGrade}/>
                            <br />
                        </Form.Group>
                    </div>
                
                </Col>
            </Row>

            <Row >
                <Col style={{textAlign:"left"}}>
                    <Button className="buttonRow" variant="outline-warning" size="lg" onClick={this.back}>Previous</Button>{' '}
                </Col>           
                <Col style={{textAlign:"right"}}>
                    <Button className="buttonRow" variant="outline-primary" size="lg"  onClick={submitHandler}>Submit</Button>{' '}
                </Col>
            </Row>

            </Card>
            </Form>
        </Container>

    );
    }

}

export default Graduation;