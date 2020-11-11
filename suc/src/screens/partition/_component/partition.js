import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import studentImg from '../../../assets/images/sliders/student.png';
import alumniImg from '../../../assets/images/sliders/alumni.png';
import NavBar from '../../../components/navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import history from '../../../history/history';
import '../_css/partition.css';

class Partition extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div style={{backgroundColor:"#000"}}>
                <div style={{width:"90%"}}>
                    <NavBar/>
                </div>
                <div className="row topOfPage" style={{backgroundColor:"#000"}}>
                        <div className="col-lg-5 ">
                            <img
                                className="aboutImage"
                                src={alumniImg}
                                alt="About Suc"
                                // style={{borderRadius: "100%"}}
                            />
                        </div>
                        <div className="col-lg-6 messageAbout">
                            <Button variant="outline-primary" size="lg" className="loginButton">Alumni</Button>
                        </div>
                </div>
                {/* <hr className="lineBreak" style={{backgroundColor:"#000"}}/> */}
                <div>
                <div className="row center" style={{backgroundColor:"#000"}}>
                        <div className="col-lg-6 messageAbout">
                            <Button variant="outline-primary" size="lg" className="loginButton" onClick={() => history.push('/student')}>Student</Button>
                        </div>
                        <div className="col-lg-5 ">
                            <img
                                className="aboutImage"
                                src={studentImg}
                                alt="About Suc"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Partition;