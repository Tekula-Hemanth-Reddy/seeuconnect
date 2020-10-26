import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/about',
    icon: <FaIcons.FaUser/>,
    cName: 'nav-text'
  },
  {
    title: 'My Skills',
    path: '/skills',
    icon: <AiIcons.AiFillBulb/>,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <BsIcons.BsBookHalf />,
    cName: 'nav-text'
  },
  {
    title: 'My Port Folio',
    path: '/portfolio',
    icon: <BiIcons.BiShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'Testimonials',
    path: '/testimonial',
    icon: <FaIcons.FaQuoteLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <GrIcons.GrMail />,
    cName: 'nav-text'
  }
];
