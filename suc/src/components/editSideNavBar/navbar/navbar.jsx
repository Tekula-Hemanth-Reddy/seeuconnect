import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';

function SideNavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
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
                  <a href={item.path}>
                    {item.icon} 
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SideNavBar;
