import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import * as AiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import history from '../../../../src/history/history';
import './navbar.css';
import { IconContext } from 'react-icons';
import authContext from '../../../context/auth-context'
import * as RiIcons from 'react-icons/ri';

const SideNavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
      <authContext.Consumer>
        {(context)=>{
          return(
          <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active'>             
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle1'>
              <AiIcons.RiEditBoxLine style={{height:"40px",width:"40px"}}/>
              <p style={{fontSize:"25px",color:"white",marginLeft:"8px",marginTop:"20px"}}>Edit Profile</p>    
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon} 
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text" style={{marginLeft:"-2px"}}>
            <Button href="/profile/home" variant="outline-primary" size="lg" style={{borderWidth:"0px"}} onClick={()=>{history.push('/profile/home')}}><IoIcons.IoMdReturnLeft style={{marginRight:"20px"}}/>Return Back</Button>
                
                </li>
            <li className="nav-text" style={{marginLeft:"-2px"}}>
                  <Button href="/home" variant="outline-primary" size="lg" style={{borderWidth:"0px"}} onClick={context.logout}><RiIcons.RiLogoutCircleRLine style={{marginRight:"20px"}}/>Log Out</Button>
                </li>
          </ul>
        </nav>
      </IconContext.Provider>
      </div>);
      }}
      </authContext.Consumer>);
}

export default SideNavBar;
