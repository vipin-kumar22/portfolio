import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { gsap } from "gsap";
import { Outlet } from 'react-router-dom';
import './mainLayout.css'
import { FaBars } from "react-icons/fa";
import { cursor } from './mainLayout.js';
import Dropdowm from '../dropdowm.jsx';
import { ThemeContext } from '../Theme.jsx';
import logo from '../../assets/Mylogo.png'
export default function MainLayout() {
  const [openSidebar,setSidebar]= useState(false);
  const [cursorP ,setcursorP]  = useState({});
  const {theme ,toggleMode}  = useContext(ThemeContext);
  console.log("22theme",theme);
  
  useEffect(()=>{
    gsap.from(".sidebar", { rotation: 320, x: -200, duration: 2});
    gsap.to(".sidebar",{ rotation: 360, x: 0, y: 0, duration: 2 });
    gsap.from(".cont", { rotation: 320, x: -200, duration: 2});
    gsap.to(".cont",{ rotation: 360, x: 0, y: 0, duration: 2});
  },[])

  const ref1  = useRef(null);
  const ref2 = useRef(null);
  const ref0  = useRef(null);
  const ref3 = useRef(null);
  useEffect(()=>{
    if(ref1.current && ref2.current){
      cursor(ref1.current, ref2.current, ref0.current,setcursorP);
    }

  },[])

  function sidebarAnimation(ins){
    if(ins===true){
        gsap.from(".dropdown", { height:0, duration: .5});
        gsap.to(".dropdown",{  height:"100%", duration: .5 });
     }
     else{
      gsap.from(".dropdown", { height:"auto", duration: .2});
      gsap.to(".dropdown",{height:0, duration: .2 });
     }   
  }

 useEffect(() => {
  function handleClickOutside(e) {
  const dropdown = document.querySelector(".dropdown");
  if (ref3.current?.contains(e.target)) return; // FaBars ignore
  // if (dropdown?.contains(e.target)) return;     // dropdown ignore
  setSidebar(false);                            // click outside → close
}


  if (openSidebar) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [openSidebar]);


  useEffect(()=>{
    sidebarAnimation(openSidebar);
  },[openSidebar])


  return (
    <div className={`h-[100vh] flex justify-center flex-row relative  ${theme.bgColor} ${theme.text1}`} ref={ref0}  >

       <div className="cursor-dot" ref={ref1}></div>
       <div className="cursor-trail" ref={ref2}></div>

       <div className='ff sm:w-[25%] w-[calc(1/8%+80px)] md:w-[30%] px-2 py-1 sidebar sidebarBox'>
        <Sidebar/>
       </div>
      
        <div className=' w-[100%]  cont flex flex-col'>
          <div className='MobileNav p-1 text-2xl hidden h-[8%] justify-between items-center  shadow-md'>
             
              <img src={logo} alt="" className='w-24 h-24'/>
             
              <FaBars className='mr-2 text-3xl' onClick={(e)=>{
                e.stopPropagation();
                setSidebar(prev=>!prev) }} ref={ref3} 
                />
               <div className='dropdown absolute z-30  top-0 w-full mt-1 left-0 right-0 h-[95%]  borde-4 border-pink-400 shadow-md bg-white'>
                <Dropdowm istrue={openSidebar}/>
                </div>
          </div>

          <div className={`sm:h-[90%]  md:h-[100%] h-[90%] w-[100%] flex flex-col`}>
            
            <Outlet/>
          </div>
       </div>
    </div>
  )
}
