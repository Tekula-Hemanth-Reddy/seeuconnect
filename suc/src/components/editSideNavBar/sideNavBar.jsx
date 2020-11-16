import React from 'react';
import './sideNavBar.css';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PersonalDetails from '../profilePages/personalDetails/component/personalDetails';
import Education from '../profilePages/education/education';
import Experience from '../profilePages/experience/component/experience';
import Achievements from '../profilePages/achievements/component/achievement';
import Project from '../profilePages/project/component/project';
import ReachOut from '../profilePages/reachout/component/reachout';
import Skill from '../profilePages/skills/component/skills';
import authContext from '../../context/auth-context';
import Languages from '../profilePages/languages/component/languages';
import Courses from '../profilePages/courses/component/courses';
import Address from '../profilePages/address/component/address';

const SideNavBar=()=> {
  return (
    <authContext.Consumer>
        {(context)=>{
          return(
    <div style={{backgroundColor:" #181616"}}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile/edit/personalDetails' component={PersonalDetails} />
          <Route path='/profile/edit/education' component={Education}/>
          <Route path='/profile/edit/experience' component={Experience} />
          <Route path='/profile/edit/achievement' component={Achievements} />
          <Route path='/profile/edit/project' exact component={Project} />
          <Route path='/profile/edit/reachOut' component={ReachOut} />
          <Route path='/profile/edit/skill' component={Skill}/>
          <Route path='/profile/edit/language' component={Languages}/>
          <Route path='/profile/edit/course' component={Courses}/>
          <Route path='/profile/edit/address' component={Address}/>
          </Switch>
      </Router>
    </div>);
  }}
  </authContext.Consumer>
  );
}

export default SideNavBar;
