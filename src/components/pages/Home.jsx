import React, { useEffect } from 'react';
import myimg from '../../assets/my.jpg';
// import leaf from '../../assets/blue-leaf.png';
import { Link } from 'react-router-dom';

import { TextPlugin } from "gsap/TextPlugin";
import { gsap } from "gsap";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  useEffect(() => {
    // Button animation
    gsap.from(".xyx", { rotation: 0, x: -200 ,y:-500, duration: 1.8 });
    gsap.to(".xyx", { rotation: 360, x: 0, y: 0, duration: 1.8 });

    gsap.from(".xyx1", { rotation: 0, x: -200 ,y:-600, duration: 1.5});
    gsap.to(".xyx1", { rotation: 360, x: 0, y: 0, duration: 1.5 });

    // Profile image animation
    gsap.from(".profileImg", { rotation: 360, x: 500, duration: 1.5 });
    gsap.to(".profileImg", { rotation: 360, x: 0, y: 0, duration: 1.5 });

    // Text typing animation
    gsap.to(".discription", {
      duration: 3,
      text: "Creating Responsive and more attractive UserFriendly Websites",
      ease: "none",
    });

    // Banner animation
    gsap.set(".banner1", { scaleX: 0, transformOrigin: "left" });
    gsap.to(".banner1", { scaleX: 1, duration: 2, ease: "power2.out", });

  }, []);

  return (
    <div className='h-[100%] flex justify-center flex-col items-center overflow-hidden '>



    

      <div className='borde-4 border-black absolute top-0 w-[100%]'></div>

      <div className='w-[100%] flex justify-center'>

        <div className='w-[60%] px-2 flex flex-col gap-6 justify-end items-center'>
          <div className='w-[90%] px-2 flex flex-col gap-8 justify-end'>
            <h1 className='  text-[calc(90vw/6.2)] md:text-[calc(60vw/7.2)] sm:text-[calc(60vw/10)]'>Hi</h1>
            <h3 className='text-3xl md:text-[calc(60vw/13)] sm:text-[calc(60vw/15)]'>
              I'm <span className='text-4xl sm:text-[calc(60vw/12)]'>Vipin</span>
            </h3>
            <p className='text-2xl sm:text-[calc(60vw/24)]'>Frontend Web Developer</p>
            <p className='discription text-sm sm:text-lg'></p>
          </div>
        </div>

        <div className='w-[40%] flex justify-center items-center'>
          <img src={myimg} alt="" className='profileImg  w-80 rounded-full' />
        </div>

      </div>

      <div className='w-[90%] px-2 flex mt-8'>
        <button className='xyx rounded-md text-white px-4 py-2 bg-blue-500 text-sm md:text-xl sm:text-2xl shadow-sm mr-4'>
         <Link to="/contact">Contact</Link>
        </button>
        <button className='xyx1 border rounded-md px-4 py-2 text-sm md:text-xl sm:text-2xl shadow-sm'>
          Download Resume
        </button>
      </div>

    </div>
  );
}
