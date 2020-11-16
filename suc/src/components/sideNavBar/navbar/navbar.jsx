import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import {Button} from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import authContext from '../../../context/auth-context';

function SideNavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <authContext.Consumer>
        {(context)=>{
          return(
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle' style={{backgroundColor:"#007fbb"}}>
           
            <RiIcons.RiProfileLine style={{height:"40px",width:"40px",marginLeft:"5px"}}/>
            <p style={{fontSize:"25px",color:"white",marginLeft:"8px",marginTop:"20px"}}>Profile</p>    
            
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text" style={{marginLeft:"-2px"}}>
              <Button href="/home" variant="outline-primary" size="lg" style={{borderWidth:"0px"}} onClick={context.logout}><RiIcons.RiLogoutCircleRLine style={{marginRight:"20px"}}/>Log Out</Button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>);
    }}
    </authContext.Consumer>
  );
}

export default SideNavBar;
