import React from 'react';
import './sideNavBar.css';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Home from './pages/home';
import Skills from './pages/skills';
import EditSideBar from '../editSideNavBar/sideNavBar';
import Courses from './pages/courses';
import Awards from './pages/awards';
import Projects from './pages/projects';
import authContext from '../../context/auth-context';


const SideNavBar=() =>{
  return (
    <authContext.Consumer>
        {(context)=>{
          return(
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile/about' component={() => <About studentId={context.userId}/>} />
          <Route path='/profile/contact' component={Contact}/>
          <Route path='/profile/education' component={Education} />
          <Route path='/profile/experience' component={Experience} />
          <Route path='/profile/home' exact component={Home} />
          <Route path='/profile/skills' component={Skills} />
          <Route path='/profile/courses' component={Courses}/>
          <Route path='/profile/edit' component={EditSideBar}/>
          <Route path='/profile/awards' component={Awards}/>
          <Route path='/profile/projects' component={Projects}/>
        </Switch>
      </Router>
    </div>);
    }}
    </authContext.Consumer>
  );
}

export default SideNavBar;
