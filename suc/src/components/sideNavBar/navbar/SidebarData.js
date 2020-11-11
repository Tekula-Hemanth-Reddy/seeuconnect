import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '/profile/home',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/profile/about',
    icon: <FaIcons.FaUser/>,
    cName: 'nav-text'
  },
  {
    title: 'My Skills',
    path: '/profile/skills',
    icon: <AiIcons.AiFillBulb/>,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/profile/education',
    icon: <BsIcons.BsBookHalf />,
    cName: 'nav-text'
  },
  {
    title: 'My Port Folio',
    path: '/profile/portfolio',
    icon: <BiIcons.BiShoppingBag />,
    cName: 'nav-text'
  },
  {
    title: 'Testimonials',
    path: '/profile/testimonial',
    icon: <FaIcons.FaQuoteLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/profile/experience',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Blog',
    path: '/profile/blog',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/profile/contact',
    icon: <GrIcons.GrMail />,
    cName: 'nav-text'
  }
];
