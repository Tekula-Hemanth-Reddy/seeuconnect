import React,{Component} from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../../../assets/images/about.png';
import '../_css/aboutsuc.css';

class AboutSuc extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <Container>
                <div className="row center">
                    <div className="col-lg-7 messageAbout">
                        <h3>
                            We want to help bring talented students to real time working experience.
                        </h3>
                    </div>
                    <div className="col-lg-5 ">
                        <img
                            className="aboutImage"
                            src={about}
                            alt="About Suc"
                        />
                    </div>
                </div>
            </Container>
        );
    }
}

export default AboutSuc;