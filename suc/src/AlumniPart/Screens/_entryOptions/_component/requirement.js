import React,{Component} from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import '../_css/requirement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../../Components/navBar/component/alumniNavbar';
import authContext from '../../../../context/auth-context';
import * as RIIcons from 'react-icons/ri';
import Fotter from '../../../../components/FirstPage/Fotter/_component/_fotter';

class Requirement extends Component{
    constructor(props){
        super(props);
        this.type = React.createRef();
        this.days = React.createRef();
        this.stipend = React.createRef();
        this.state = {
            skillList:[],
            userInput : "", 
            studentsData:[],
            studentsList:[],
        }
    }

    updateInput(value){ 
        this.setState({ 
          userInput: value, 
        }); 
      } 
      
      addSkill(){ 
        if(this.state.userInput !== '' ){ 
          const userInput1 = { 
      
            value : this.state.userInput 
          }; 
          let list = [...this.state.skillList];
          if(this.state.skillList.length!==0){
            list = list.filter(function(common) { 
              return common.value !== userInput1.value 
          })            
          }
          list.push(userInput1); 
        
          this.setState({ 
            skillList:list, 
            userInput:""
          }); 
        } 
      } 
      
     openProfile(studentData)
     {
       console.log(studentData);
        sessionStorage.setItem("profileProps", JSON.stringify(studentData));
        window.open('/fullProfile', "_blank") ;
     }
      deleteSkill(key){ 
        
        const list = [...this.state.skillList]; 
      
        const updateList = list.filter(item => item.value !== key); 
      
        console.log(updateList);
        this.setState({ 
          skillList:updateList, 
        }); 
      
      } 

    static contextType = authContext;

    componentDidMount()
    {
    const requestBody = {
      query: `
        query{
          profile {
            _id
            name
            phoneNumber
            email
            interestedIntern
            skills {
              skill
            }
            positions {
              _id
              positionHeld
              companyName
              startDate
              endDate
            }
            projects {
              _id
              projectName
              projectUrl
              projectDescription
              projectDemo
            }
            courses {
              _id
              courseName
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
            studentsData: resData.data.profile,
            skillList: sessionStorage.getItem("my_skills")===null?[]:JSON.parse(sessionStorage.getItem("my_skills")),
        });
      })
      .catch(err => {
          console.log(err);
      });
  }

  //it is a function which returns the list of ids in sorted order by comparing the skills needed by him with the profile skills as of now 
  // i just called this function after retrival of data in compound did mount by giving few fixed values in this.state.skillList 
  //todo: make this function call when you click show button and pass this this.state.studentsData array to new page and show in the list form if possible try to show main details of that paticular student if pressed 
  UsefulData(){
        const workType = ""+this.type.current.value;
        const workDays = ""+this.days.current.value;
        const workMoney =""+this.stipend.current.value;
        if(workType==="" || workDays==="" || workMoney==="" || this.state.skillList.length===0)
        {
          return;
        }
        sessionStorage.setItem("jobType", workType);
        sessionStorage.setItem("jobDays", workDays);
        sessionStorage.setItem("jobMoney", workMoney);
    let listData = [];
    sessionStorage.setItem("my_skills", JSON.stringify(this.state.skillList));
    for (let index = 0; index < this.state.studentsData.length; index++)
    {
        let element = this.state.studentsData[index];
        if(element.interestedIntern)
        {
            let match = 0;
            for (let i = 0; i < this.state.skillList.length; i++){
              for (let k = 0; k < element.skills.length; k++){
                if(element.skills[k].skill===this.state.skillList[i].value){
                  match++;
                  break;
                }
              }
            }
            let data ={
              id : element._id,
              name: element.name,
              phoneNumber: element.phoneNumber,
              email: element.email,
              skill: element.skills.length,
              positions: element.positions.length,
              projects: element.projects.length,
              courses: element.courses.length,
              count: match,
              skills_data:element.skills,
              projects_data:element.projects,
              courses_data:element.courses,
              positions_data:element.positions,
            }
            listData.push(data);
            listData = listData.sort((a, b) => {
              if((b.count - a.count)!==0){
                return (b.count - a.count);
              }
              else{
                if((b.positions - a.positions)!==0){
                  return (b.positions - a.positions);
                }
                else{
                  if((b.projects - a.projects)!==0){
                    return (b.projects - a.projects);
                  }
                  else{
                    if((b.courses - a.courses)!==0){
                      return (b.courses - a.courses);
                    }
                    else{
                      return (b.skill - a.skill);
                    }
                  }
                }
              }
            });
      } 
  }
  this.setState({
    studentsList: listData,
  });
}
    render(){
        return(
            <div  style={{backgroundColor:"#000"}}>
            <NavBar />
            <Container  className="requireContainer">
            <Form>
                <h2 style={{marginTop:"30px"}}>Recruitment</h2>
                <Card className="requireCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                <Row>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Work From :</Col>
                    <Col xs={2}>    
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label></Form.Label>
                            <Form.Control 
                            as="select"
                            ref={this.type}
                            >
                            <option>Home</option>
                            <option>Office</option>
                            </Form.Control>
                        </Form.Group>
                            
                    </Col>
                    <Col xs={2} style={{marginTop:"30px",textAlign:"right"}}>Duration :</Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Months"
                                style={{marginTop:"20px",textAlign:"right"}} 
                                ref={this.days}
                             />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col xs={2} style={{marginTop:"10px",textAlign:"right"}}>stipend :</Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Control 
                                size="text" 
                                type="Number" 
                                placeholder="Money in ₹" 
                                ref={this.stipend}
                             />
                        </Form.Group>
                    </Col>
                </Row>
                </Card>
                <h2 style={{marginTop:"30px"}}>Skills</h2>
                <hr style={{marginLeft:"20vh",marginRight:"20vh",backgroundColor:"#fff"}} />
                <Row>
                    <Col xs={6}>
                    <h3 style={{marginTop:"30px"}}>Add Required Skills</h3>
                    <Card className="requireCardStyle" style={{marginTop:"20px",marginBottom: "20px"}}>
                        <Form.Group>
                        <Form.Control 
                        as="select"
                        value = {this.state.userInput} 
                        onChange = {item => this.updateInput(item.target.value)} 
                        >
                          <option> </option>
                        <option>C</option>
                        <option>C++</option>
                        <option>DS</option>
                        <option>Java</option>
                        <option>CyberSecurity</option>
                        <option>Android</option>
                        <option>Kotlin</option>
                        <option>Html</option>
                        <option>CSS</option>
                        <option>JavaScript</option>
                        <option>PHP</option>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Python</option>
                        <option>Node</option>
                        <option>MongoDb</option> 
                        <option>Graphql</option>
                        </Form.Control>
                        </Form.Group>
                        <Button variant="primary" 
                            style={{marginLeft:"20vh",marginRight:"20vh"}}
                            onClick = {()=>this.addSkill()} >Add Skill</Button>{' '}
                    </Card>
                    <Row>
                    <Col xs={12}>
                      <Button variant="outline-warning" onClick={this.UsefulData.bind(this)}>Show People</Button>
                    </Col>
                    </Row>
                        <Row>
                          <Col xs={12}>
                          <h3 style={{color:"#fff",marginTop:"5%"}}>People You Needed</h3>
                            {this.state.studentsList.map(item =>(
                              <Card className="requireCardStyle" style={{marginTop:"10px",marginBottom: "10px"}}>
                                <Row>
                                  <Col xs={2}><RIIcons.RiFileUserFill/></Col>
                                  <Col xs={5}  style={{marginBottom:"5px"}}><p style={{fontSize:"15px",marginLeft:"-10px",marginBottom:"5px"}}>{item.name.split("-")[0]}{" "}{item.name.split("-")[1]}{" "}{item.name.split("-")[2]}</p> </Col>
                                  <Col xs={4} style={{textAlign:"right"}}><Button 
                                  variant="primary" 
                                  size="sm"
                                  onClick ={ () => this.openProfile(item)}
                                  >Show Full Profile</Button></Col>
                                  </Row>
                                </Card> 
                            ))}
                          </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                    <h3 style={{color:"#fff",marginTop:"5%"}}>Skills You Needed</h3>
                    {this.state.skillList.map(item =>(
                        <div style={{paddingTop:"3%",paddingBottom:"2%"}}>
                          <Card style={{borderWidth:"2px",borderColor:"#007fbb",backgroundColor:"transparent",padding:"15px"}}>
                              <Row>
                                  <Col md={8}>
                                      <h5 style={{color:"#fff",marginTop:"5px"}}>{item.value}</h5>
                                  </Col>
                                  <Col md={4}>
                                  <Button variant="outline-danger" onClick = { () => this.deleteSkill(item.value) }>{<FontAwesomeIcon icon={faTimes}/>}</Button>
                                  </Col>
                              </Row>
                          </Card>
                        </div>
                    ))}
                </Col>
                </Row>
                </Form> 
            </Container>
            <Fotter/>
            </div>
        );
    }
}

export default Requirement;