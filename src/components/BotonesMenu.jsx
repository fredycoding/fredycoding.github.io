import React from 'react'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Face6Icon from '@mui/icons-material/Face6';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link, animateScroll as scroll } from "react-scroll";


export const BotonesMenu = () => {

  return (
    <>
      <ul className='fixed flex flex-col gap-16 mt-60 ml-10 z-30 backdrop-blur-sm'>
        <li className='hover:backdrop-sepia'>
          <Link
            activeClass="active"
            to="Section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800} 
            className='btn-flotante section1-class rounded-full  border-2 p-4 border-sky-400 text-white hover:home-class-block '       
          >
            <OtherHousesIcon />
          </Link> <span className='home-class text-white font-bold hidden'>Home</span>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section2"
            spy={true}
            smooth={true}
            offset={-70} 
            className='btn-flotante section2-class rounded-full  border-2 p-4 border-sky-400 text-white'                        
          >
            <Face6Icon/>
          </Link> <span className='profile-class text-white font-bold hidden'>Profile</span>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800} 
            className='btn-flotante section3-class rounded-full  border-2 p-4 border-sky-400 text-white'             
          >
            <AnalyticsIcon />
          </Link> <span className='portfolio-class text-white font-bold hidden'>Portfolio</span>
        </li>
        <li className='hover:backdrop-sepia'>
        <Link
            activeClass="active"
            to="Section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className='btn-flotante section4-class rounded-full  border-2 p-4 border-sky-400 text-white'              
          >
            <AssuredWorkloadIcon />
          </Link> <span className='education-class text-white font-bold hidden'>Education</span>
        </li>
        <li className='hover:backdrop-sepia' >
        <Link
            activeClass="active"
            to="Section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className='btn-flotante section5-class rounded-full  border-2 p-4 border-sky-400 text-white'         
          >
            <ContactsIcon />
          </Link> <span className='contact-class text-white font-bold hidden'>Contact</span>
        </li>
      </ul>
    </>
  )
}
