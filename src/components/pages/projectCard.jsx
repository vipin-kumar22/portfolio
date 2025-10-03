// ProjectCard.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";


export default function ProjectCard({ image, title, description, link }) {

const { theme, toggleMode } = useContext(ThemeContext);


  return (
    <div
      className={`border border-blue-400 ${theme.bgColor2} mb-4 font-sans rounded-lg flex flex-col p-3 hover:shadow-lg transition-transform duration-300 transform hover:scale-110`}
      style={{ cursor: "pointer" }}
    >
      <div className="mb-2 h-[60%]">
        <img src={image} alt="" className="object-cover h-[100%] w-[100%]" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-md p-1">{description}</p>
      <div className="borde border-pink-400 flex rounded mt-1">
        <a href={link} target="_blank" className="bg-blue-400 p-1 rounded">
          Live Demo
        </a>
      </div>
    </div>
  );
}
