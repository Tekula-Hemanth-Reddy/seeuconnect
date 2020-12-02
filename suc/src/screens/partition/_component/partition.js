import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import studentImg from '../../../assets/images/sliders/student.png';
import alumniImg from '../../../assets/images/sliders/alumni.png';
import NavBar from '../../../components/FirstPage/navbar/navbar';
import history from '../../../history/history';
import Fotter from '../../../components/FirstPage/Fotter/_component/_fotter';
import '../_css/partition.css';

class Partition extends Component{
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
                            />
                        </div>
                        <div className="col-lg-6 messageAbout">
                            <Button variant="outline-primary" size="lg" className="loginButton" onClick={() => history.push('/alumni')}>Alumni</Button>
                        </div>
                </div>
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
                <Fotter/>
            </div>
        );
    }

}

export default Partition;