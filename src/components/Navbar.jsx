import React, { useState } from "react";
import Logo from '../assets/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
            <div>
                <img src={Logo} alt="Aditya Ardiansyah" style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li className="text-white hover:text-green-400">
                    <Link to="home" smooth={true} duration={500}>
                        <span className="hover:border-green-400 hover:border-b-2 py-1">
                            Home
                        </span> 
                    </Link>
                </li>
                <li className="text-white">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="text-white">
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="text-white">
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                { !nav? <FaBars /> : <FaTimes />}
            </div>
            
            {/* Mobile menu */}
            <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl text-white">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl text-white">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl text-white">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl text-white">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30} />   
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            Github <FaGithub size={30} />   
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30} />   
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a href="/" className="flex justify-between items-center w-full text-gray-300">
                            Resume <BsFillPersonLinesFill size={30} />   
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Navbar;