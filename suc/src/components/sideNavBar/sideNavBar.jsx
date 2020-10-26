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
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact}/>
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/home' exact component={Home} />
          <Route path='/portfolio' component={PortFolio} />
          <Route path='/skills' component={Skills} />
          <Route path='/testimonial' exact component={Testimonial} />
        </Switch>
      </Router>
    </div>
  );
}

export default SideNavBar;
