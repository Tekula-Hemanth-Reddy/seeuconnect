import React,{Component} from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import '../_css/auth.css';
import PersonImage from '../../../../assets/images/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import authContext from '../../../../context/auth-context';
import NavBar from '../../../Components/navBar/component/alumniNavbar';

class Auth extends Component{
    render(){
        return(
            <div>
                <p>Admin</p>
            </div>
        );
    }
}