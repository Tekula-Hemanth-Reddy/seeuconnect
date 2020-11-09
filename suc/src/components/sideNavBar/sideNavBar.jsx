import React from 'react';
import './sideNavBar.css';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Home from './pages/home';
import PortFolio from './pages/portfolio';
import Skills from './pages/skills';
import Testimonial from './pages/testimonial';


function SideNavBar() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/profile/about' component={About} />
          <Route path='/profile/blog' component={Blog} />
          <Route path='/profile/contact' component={Contact}/>
          <Route path='/profile/education' component={Education} />
          <Route path='/profile/experience' component={Experience} />
          <Route path='/profile/home' exact component={Home} />
          <Route path='/profile/portfolio' component={PortFolio} />
          <Route path='/profile/skills' component={Skills} />
          <Route path='/profile/testimonial' exact component={Testimonial} />
        </Switch>
      </Router>
    </div>
  );
}

export default SideNavBar;
