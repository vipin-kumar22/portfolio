import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import logo from "../../assets/Mylogo.png";

import { ThemeContext } from "../Theme";


export default function Sidebar() {
  const location = useLocation();
  const {theme ,toggleMode}  = useContext(ThemeContext)
  const [color,setColor] =useState(false);
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skill", label: "Skill" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className={`h-screen font-jost flex flex-col justify-between shadow-2xl ${theme.bgColor?'bg-[0d0d0d]':''}`}>
      
      {/* Logo Section */}
      <div className="h-[20%] flex justify-center items-center p-2  flex justify-center items-center shadow-sm">
        <span className="text-red-500 text-[clamp(1.4rem,3vw,3.5rem)] font-bold borde-2 borde-red-400 w-[100%] h-[100%] flex justify-center items-center">
          <img src={logo} alt="" className="w-[65%] "/>
        </span>

 
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-6 mt-6 px-4 text-lg tracking-wide">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`relative group py-2 text-2xl text-center rounded-md transition-all duration-300 ${
              location.pathname === link.path
                ? "text-blue-700 font-semibold "
                : "hover:text-yellow-300"
            }`}
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <div className="flex items-center justify-center cursor-pointer" onClick={()=>{
          toggleMode();
          setColor(prev=>!prev);
        }}>
          <p className={`text-2xl flex gap-2 justify-center`}><FaMoon   className={`${theme.bgColor?"text-white":"text-blue-400"}`}/>Dark</p>
        </div>
        
      </div>

      {/* Social Links */}
      <div className=" h-[12%] flex justify-evenly items-center text-3xl shadow-md b-blue-300 border-t">
        <a
          href="https://linkedin.com/in/vipinkumar95"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125 hover:text-blue-500"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.hackerrank.com/profile/vipinkumar_ak40/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125 hover:text-green-400"
          title="HackerRank"
        >
          <SiHackerrank />
        </a>
        <a
          href="https://github.com/Vipin9588"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125 hover:text-gray-300"
          title="GitHub"
        >
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
}
