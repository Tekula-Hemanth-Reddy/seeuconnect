import React,{Component} from 'react';
import {Row,Col,Container,Tabs,Tab,Nav} from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './css/edit.css';
import PersonalDetails from '../../profilePages/personalDetails/component/personalDetails';
import Education from '../../profilePages/education/education';
import Experience from '../../profilePages/experience/component/experience';
import Project from '../../profilePages/project/component/project';
import ReachOut from '../../profilePages/reachout/component/reachout';
import Achievement from '../../profilePages/achievements/component/achievement';
import SideNavBar from '../../editSideNavBar/sideNavBar';

export class Edit extends Component
{
    render()
    {
        return(
            
           <SideNavBar/>
          
        );
    }
}

export default Edit;
