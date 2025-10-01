import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex items-center justify-center gap-5  shadow-lg  rounded-xl">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-md transition-all duration-300 hover:bg-pink-600 hover:scale-110 active:scale-95"
      >
        <FaInstagram className="text-xl" />
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/Vipinkumar__90"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-md transition-all duration-300 hover:bg-sky-500 hover:scale-110 active:scale-95"
      >
        <FaTwitter className="text-xl" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vipinkumar95"
        target="_blank"
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-95"
      >
        <FaLinkedin className="text-xl" />
      </a>
        
      
    </div>
  );
};

export default Card;
