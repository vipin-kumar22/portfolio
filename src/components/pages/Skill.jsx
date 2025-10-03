import React, { useContext, useEffect } from "react";
import HTML5 from "../../assets/skill/html5-original-wordmark.svg";
import css from "../../assets/skill/css3.svg";
import js from "../../assets/skill/javascript.svg";
import tailwind2 from "../../assets/skill/tailwindcss2.svg";
import react1 from "../../assets/skill/react.svg";
import Sql from "../../assets/skill/mysql.svg";
import nodejs from "../../assets/skill/nodejs.svg";
import { gsap } from "gsap";
import myimg from "../../assets/my.jpg";

import { FaRegComment } from "react-icons/fa";
import { GrGroup, GrTarget } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { GoZap } from "react-icons/go";
import { FiFeather } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline, IoIosTrendingUp } from "react-icons/io";
import { LuBicepsFlexed } from "react-icons/lu";
import { ThemeContext } from "../Theme";

export default function Skill() {
  useEffect(() => {
    // This is a Tween
    gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

    // And this is a Timeline, containing three sequenced tweens
    let tl = gsap.timeline();
    let elements = [
      ".html",
      ".css",
      ".js",
      ".tailwind",
      ".react",
      ".sql",
      ".nodejs",
      ".express"
    ];
    elements.forEach((el, i) => {
      tl.from(el, { duration: 0.2, opacity: 0, delay: 0.05 }).to(el, {
        duration: 0.2,
        opacity: 1,
        delay: 0.05,
      });
    });
  }, []);

  const {theme,toggleMode} = useContext(ThemeContext);

  return (
    <div className={`${theme.text1} h-[100%] font-sans overflow-y-scroll`}>
      <header className="borde-2 borde-green-400 ">
        <h1 className="text-3xl font-bold  p-2 mb-4] text-center">
          My Technical Expertise
        </h1>
        <p className="text-lg  max-w-2xl mx-auto text-center">
          Specializing in modern web technologies to build scalable, performant
          applications with exceptional user experiences.
        </p>
      </header>

      <div className={`${theme.text1}  mx-4 mt-3 flex flex-col lg:flex-row items-center  rounded-xl shadow-md overflow-hidden mb-12`}>
        <div className="w-full lg:w-1/4 p-4 lg:p-5 flex justify-center lg:justify-center ">
          <div className="relative">
            <img
              src={myimg}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 rounded-full p-2 shadow-lg">
              <LuBicepsFlexed className="text-blue-600 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 p-6  w-[100%]">
          <h2 className="text-2xl font-semibold mb-3">
            Technical Proficiencies
          </h2>
          <p className=" mb-4 leading-relaxed text-lg">
            With expertise in frontend development and foundational backend
            knowledge, I create responsive, accessible web applications using
            modern technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              HTML5
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              CSS3
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              JavaScript (ES6+)
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              React.js
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              MySQL
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Git/GitHub
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6  p-3">
        <h2 className="text-2xl font-semibold  mb-8 text-center">
          Core Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
          <div className={`skill-card html ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center ">
              <img
                src={HTML5}
                alt="HTML5"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>HTML5</span>
          </div>

          <div className={`skill-card css ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img src={css} alt="CSS3" className="w-full h-full object-contain" />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>CSS3</span>
          </div>

          <div className={`skill-card js ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={js}
                alt="JavaScript"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>JavaScript</span>
          </div>

          <div className={`skill-card tailwind ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={tailwind2}
                alt="Tailwind CSS"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>Tailwind</span>
          </div>

          <div className={`skill-card react ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={react1}
                alt="React"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>React</span>
          </div>

          <div className={`skill-card sql ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img src={Sql} alt="SQL" className="w-full h-full object-contain" />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>SQL</span>
          </div>

          <div className={`skill-card nodejs ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={nodejs}
                alt="Node.js"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>Node.js</span>
          </div>

          <div className={`skill-card express ${theme.bgColor2} rounded-xl shadow-md p-6 flex flex-col items-center justify-center`}>
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src="https://cdn.groovetechnology.com/wp-content/uploads/2023/08/expressjs.png"
                alt="express.js"
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-sm font-medium ${theme.text2}`}>express.js</span>
          </div>
        </div>
      </div>

      <div className=" rounded-xl shadow-lg overflow-hidden ">
        <div className="p-8">
          <h2 className={`text-2xl font-semibold ${theme.text2} mb-6`}>
            Complementary Soft Skills
          </h2>
          <p className={`${theme.text2} mb-6 max-w-3xl`}>
            Beyond technical expertise, I bring valuable interpersonal and
            cognitive skills that enhance collaboration and problem-solving in
            team environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <FaRegComment className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Communication</h3>
                <p className="text-sm ">
                  Clear articulation of technical concepts
                </p>
              </div>
            </div>

          <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <GrGroup className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium  mb-1">Collaboration</h3>
                <p className="text-sm ">
                  Effective teamwork across disciplines
                </p>
              </div>
            </div>

            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <GrTarget className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium  mb-1">Problem Solving</h3>
                <p className="text-sm ">
                  Analytical approach to challenges
                </p>
              </div>
            </div>

            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <MdAccessTime className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium  mb-1">Time Management</h3>
                <p className="text-sm">Efficient project execution</p>
              </div>
            </div>

           <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <GoZap className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Adaptability</h3>
                <p className="text-sm">
                  Quick learning of new technologies
                </p>
              </div>
            </div>

            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <FiFeather className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Creativity</h3>
                <p className="text-sm ">Innovative solution design</p>
              </div>
            </div>

            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <IoMdCheckmarkCircleOutline className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  Attention to Detail
                </h3>
                <p className="text-sm ">Precision in implementation</p>
              </div>
            </div>

            <div className={`soft-skill  ${theme.text1,theme.bgColor2}  rounded-lg p-4 flex items-start `}>
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <IoIosTrendingUp className="text-blue-600 w-5 h-5" />
              </div>
              <div className="mb-4">
                <h3 className="font-medium  mb-1">
                  Continuous Improvement
                </h3>
                <p className="text-sm ">
                  Commitment to professional growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
