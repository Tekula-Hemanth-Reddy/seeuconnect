import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
export const SidebarData = [
  {
    title: 'PersonalDetails',
    path: '/profile/edit/personalDetails',
    icon: <RiIcons.RiContactsFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/profile/edit/education',
    icon: <FaIcons.FaGraduationCap/>,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/profile/edit/project',
    icon: <AiIcons.AiOutlineProject/>,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/profile/edit/skill',
    icon: <AiIcons.AiFillBulb/>,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/profile/edit/experience',
    icon: <FaIcons.FaPencilAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Reach Out',
    path: '/profile/edit/reachOut',
    icon: <GrIcons.GrMail />,
    cName: 'nav-text'
  },
  {
    title: 'Achievements',
    path: '/profile/edit/achievement',
    icon: <BiIcons.BiTrophy/>,
    cName: 'nav-text'
  },
  {
    title: 'Languages',
    path: '/profile/edit/language',
    icon: <MdIcons.MdLanguage/>,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/profile/edit/course',
    icon: <MdIcons.MdSubject/>,
    cName: 'nav-text'
  },
  {
    title: 'Address',
    path: '/profile/edit/address',
    icon: <FaIcons.FaAddressBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Return Back',
    path: '/profile/home',
    icon: <IoIcons.IoMdReturnLeft />,
    cName: 'nav-text'
  }

];
