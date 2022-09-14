import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Face6Icon from '@mui/icons-material/Face6';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from "react-scroll";


export const NavBarCustom = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className=" flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 bg-opacity-50  mb-3 fixed z-40 w-full backdrop-blur-sm">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#"
                        >
                            Fredy A. Diaz B.
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            <li>
                                <Link
                                    activeClass="active"
                                    to="Section1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <OtherHousesIcon /><span className="ml-2">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="Section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <Face6Icon /> <span className="ml-2">Profile</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="Section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <AnalyticsIcon /> <span className="ml-2">Portafolio</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="Section4"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <AssuredWorkloadIcon /> <span className="ml-2">Education</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    activeClass="active"
                                    to="Section5"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}
                                >
                                    <ContactsIcon /> <span className="ml-2">Contact</span>
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
