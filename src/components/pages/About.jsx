import React, { useContext } from 'react'
import HTML5 from '../../assets/skill/html5-original-wordmark.svg';
import css from '../../assets/skill/css3.svg';
import js from '../../assets/skill/javascript.svg';
import tailwind2 from '../../assets/skill/tailwindcss2.svg';
import react1 from '../../assets/skill/react.svg';
import Sql from '../../assets/skill/mysql.svg';
import nodejs from '../../assets/skill/nodejs.svg';
import myimg from '../../assets/my.jpg';

import game from '../../assets/hobbies/game.png'
import music from '../../assets/hobbies/music.png'
import workout from '../../assets/hobbies/workout.png'
import { GiBullseye } from "react-icons/gi";
import { ThemeContext } from '../Theme';

export default function About() {

  const{theme,toggleMethod} = useContext(ThemeContext);

  return (
    <div className="borde-2 borde-red-500 h-full p-4 overflow-y-scroll font-sans">
      {/* Heading */}
      <h1 className={`text-4xl md:text-3xl font-bold ${theme.text1} p-2 mb-4 font-sans borde-2 borde-gray-400 text-center`}>
        About Me
      </h1>

      <h2 className="text-2xl p-2 font-semibold">I am <span className='text-blue-500 text-3xl'>Vipin</span> Frontend Developer</h2>

      {/* Grid Section */}
      <div className=" h-auto grid grid-cols-1 lg:grid-cols-[60%_40%] lg:grid-rows-[35%_65%] gap-4">
        {/* Education Card */}
        <div className={`${theme.bgColor2} flex flex-col sm:flex-row shadow-md m-2  p-8 rounded-lg transition-transform duration-300 hover:scale-[1.05]`}>
          <div className="w-full sm:w-[70%] p-2 flex flex-col justify-center">
            <h2 className="text-xl font-bold">Graduate In</h2>
            <p className='text-lg'>Bachelor In Computer Application (BCA)</p>
            <p className="text-md">
              <span className="text-gray-400 mr-2">Year</span>2025
            </p>
          </div>
          <div className="w-full sm:w-[30%] flex items-center justify-center">
            <img src={myimg} alt="Profile" className="w-24 h-24 object-cover rounded-full border-4 border-blue-400" />
          </div>
        </div>

        {/* Skills Card */}
        <div className={`${theme.bgColor2} m-2 row-span-2 grid grid-cols-1 shadow-md rounded-lg  transition-transform duration-300 hover:scale-[1.05]`}>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Key Strengths & Skills</h3>
            <ul className="list-inside space-y-2 text-md p-2 list-disc">
              <li className='text-lg'>Responsive Web Development</li>
              <li className='text-lg'>Clean and Scalable Code</li>
              <li className='text-lg'>Problem Solving & Attention to Detail</li>
              <li className='text-lg'>Team Collaboration & Communication</li>
              <li className='text-lg'>Continuous Learning & Adaptability</li>
              <li className='text-lg'>Proficient in React, Node.js, JavaScript</li>
            </ul>
          </div>

          {/* Skill Icons */}
          <div className="flex flex-wrap gap-4 p-4">
            {[HTML5, css, js, tailwind2, react1, nodejs].map((icon, i) => (
              <div
                key={i}
                className="w-14 h-14 flex items-center justify-center  p-2 shadow-md rounded-full border-[3px] border-blue-400"
              >
                <img src={icon} alt="skill" className="w-[100%] h-[100%] rounded-full object-contain " />
              </div>
            ))}
          </div>
        </div>

        {/* About Paragraph */}
        <div className={`rounded-lg m-2 shadow-md ${theme.bgColor2} transition-transform duration-300 hover:scale-[1.05] `}>
          <p className="p-4 text-lg  font-sans leading-6 tracking-[1px]  decortion-4">
            I am a Frontend Developer with a passion for creating user-friendly and interactive
            websites. I hold a Bachelor’s degree in Computer Applications (BCA) and specialize in
            building clean, responsive, and modern web interfaces. Learning new technologies and
            enhancing my skills excites me every day. I enjoy working on real-world projects that
            solve problems creatively. Curiosity, consistency, and growth drive my journey as a
            developer.
          </p>
        </div>
      </div>

      {/* Hobbies */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-2 mt-4 gap-4 borde-2 borde-blue-400">
        <h1 className="p-2 text-3xl md:col-span-3 font-semibold">Hobbies</h1>

        {[
          {
            img: game,
            title: "Gaming",
            desc: "I love playing video games to relax and challenge myself. Gaming helps me improve my strategic thinking and enjoy immersive worlds."
          },
          {
            img: music,
            title: "Music",
            desc: "I listen to a variety of songs to unwind and get inspired, exploring different genres to match my mood and energy."
          },
          {
            img: workout,
            title: "Workout",
            desc: "Staying active through workouts keeps me healthy and energetic. I believe regular exercise boosts both body and mind."
          }
        ].map((hobby, i) => (
          <div
            key={i}
            className={`${theme.bgColor2}  flex flex-col items-center gap-4 p-4 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.05]`}
          >
            <div className="h-20 w-20">
              <img src={hobby.img} alt={hobby.title} className="h-full w-full object-contain" />
            </div>
            <div className={`${theme.text2} text-center`}>
              {hobby.desc}
            </div>
          </div>
        ))}
      </div>

   {/* Extra Section - Vision / Quote */}
<div className={`mt-8 p-8  rounded-xl shadow-lg text-center ${theme.bgColor2}` }>
  <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2 pb-2">
    My Vision <GiBullseye className="text-blue-600 w-8 h-8" />
  </h2>
  <p className={`text-md ${theme.text2} leading-relaxed px-4 text-lg`}>
    Keep <span className="text-blue-600 font-bold ">learning</span>, not stopping, not slowing — until what you{' '}
    <span className="text-green-600 font-bold">want</span> finally comes.
  </p>
</div>


    </div>
  )
}
