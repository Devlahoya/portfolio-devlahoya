import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import mxflag from '../assets/mxflag.png';
import usflag from '../assets/usflag.png';
import CV from "../assets/CV.pdf";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [t, i18n] =useTranslation("global");
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: `${t("navbar.about")}`, link: "about" },
    { name: `${t("navbar.skills")}`, link: "skills" },
    { name: `${t("navbar.projects")}`, link: "work" },
    { name: `${t("navbar.contact")}`, link: "contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-4 flex items-start" >
          <img src={Logo} className="w-14 mx-2 "/>
          <h4 className="text-4xl uppercase font-bold">
            <span className="text-cyan-600">Dev</span>lahoya
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
            <button className='flex gap-2' onClick={()=> i18n.changeLanguage("en")}><img className="w-12 mx-2" src={usflag} alt="en"/></button>            
            <button className='flex gap-2' onClick={()=> i18n.changeLanguage("es")}><img className="w-12 mx-2"src={mxflag} alt="es"/></button>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-3`}
        >
          <AiOutlineMenu/>
        </div>
        <div
          className={`md:hidden text-white fixed w-2/3 h-screen
      px-7 font-medium bg-gray-700 top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center pb-10 h-screen gap-14 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(open)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
            <button className='flex' onClick={()=> i18n.changeLanguage("en")}><img className="w-12 mx-2" src={usflag} alt="en"/></button>            
            <button className='flex' onClick={()=> i18n.changeLanguage("es")}><img className="w-12 mx-2"src={mxflag} alt="es"/></button>
          </ul>
          
        </div>
      </div>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/devlahoya' target="__blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Devlahoya' target="__blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='#contact'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={CV} target="__blank" 
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
