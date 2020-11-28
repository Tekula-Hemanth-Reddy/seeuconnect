import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';
import * as MDIcons from 'react-icons/md';
import * as BIIcons from 'react-icons/bi';

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
    title: 'Experience',
    path: '/profile/experience',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/profile/contact',
    icon: <GrIcons.GrMail />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/profile/courses',
    icon: <MDIcons.MdSubject />,
    cName: 'nav-text'
  },
  {
    title: 'Awards',
    path: '/profile/awards',
    icon: <BIIcons.BiAward />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/profile/projects',
    icon: <AiIcons.AiOutlineProject />,
    cName: 'nav-text'
  },
  {
    title: 'Edit',
    path: '/profile/edit',
    icon: <RiIcons.RiEditBoxLine />,
    cName: 'nav-text'
  }
 

];
