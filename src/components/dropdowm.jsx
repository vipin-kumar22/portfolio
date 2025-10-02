import { gsap } from "gsap";
import { FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { ThemeContext } from "./Theme";
import { FaMoon } from "react-icons/fa";

export default function Dropdowm({ istrue }) {
  console.log("istrue ", istrue);
  const { theme, toggleMode } = useContext(ThemeContext);

  useEffect(() => {
    let tl = gsap.timeline();

    if (istrue === true) {
      tl.from(".Home", { opacity: 0, duration: 0.2, delay: 0.2 })
        .to(".Home", { opacity: 1, duration: 0.2, delay: 0.2 })
        .from(".About", { opacity: 0, duration: 0.2 })
        .to(".About", { opacity: 1, duration: 0.2 })
        .from(".Skill", { opacity: 0, duration: 0.2 })
        .to(".Skill", { opacity: 1, duration: 0.2 })
        .from(".Project", { opacity: 0, duration: 0.2 })
        .to(".Project", { opacity: 1, duration: 0.2 })
        .from(".Contact", { opacity: 0, duration: 0.2 })
        .to(".Contact", { opacity: 1, duration: 0.2 });
    }
  }, [istrue]);

  return (
    <div className="  bg-blu-600 relative h-[100%] flex justify-between text-black flex-col gap-4">
      <div className=" mt-4 px-6 py-3 font-bold text-4xl  flex justify-between items-center ">
        <FaMoon
          className={`${theme.bgColor ? "text-black" : "text-blue-400"}`}
          onClick={toggleMode}
        />
        <RxCross1 />
      </div>

      <div className="w-full text-center text-3xl gap-4 flex flex-col justify-center borde-2">
        <Link
          to="/Home"
          onClick={() => console.log("link ", istrue)}
          className="p-2 Home relative"
        >
          Home
        </Link>
        <Link to="/about" className="p-2 About relative">
          About
        </Link>
        <Link to="/skill" className="p-2 Skill relative">
          skill
        </Link>
        <Link to="/projects" className="p-2 Project relative">
          Project
        </Link>
        <Link to="/contact" className="p-2 mb-4 Contact relative">
          Contact
        </Link>
      </div>

      <div className="flex justify-center p-4">
        <div className="bg-blu-400 p-3 rounded flex justify-evenly items-center text-2xl  w-[45%] border">
          <a href="https://linkedin.com/in/vipinkumar95" target="_blank">
            {" "}
            <FaLinkedin />
          </a>
          <a
            href="https://www.hackerrank.com/profile/vipinkumar_ak40/"
            target="_blank"
          >
            {" "}
            <SiHackerrank />{" "}
          </a>
          <a href="https://github.com/Vipin9588" target="_blank">
            {" "}
            <FaGithubSquare />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
