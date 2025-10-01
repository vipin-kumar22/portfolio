import React from "react";
import ProjectCard from "./projectCard";
import Ecommerce from "../../assets/projects/Ecommerce.png"
import car from "../../assets/projects/car.png";
import todo from "../../assets/projects/todo.png";
import messageMe from "../../assets/projects/message.png";
import connectHub from "../../assets/projects/connectHub.png";
import currencyConverter from "../../assets/projects/currency.png";
import evOolution from "../../assets/projects/landing.png";
import Pokemon from '../../assets/projects/pokemon.png'


export default function project() {
  const projects = [
   {
      title: "ConnectHub",
      description: "A modern peer to peer video calling app using WebRTC socket.io, Node.js,express.js,HTML,CSS,JS",
      image: connectHub,
      link: "https://vvchatk.onrender.com/",
    },

     {
      title: "MessageMe",
      description: "A real-time chat application using HTML,css,js and socket.io. and Node.js,express.js",
      image: messageMe,
      link: "https://messageme2.netlify.app/",
    },


    {
      title: "ShopEase",
      description: "Responsive e-commerce website providing shopping experience with product listings, promotional offers, and userfriendly navigation.",
      image: Ecommerce,
      link: "https://vipin9588.github.io/ShopEase/",
    },
    {
      title: "Luxury",
      description: "Html,css project for car rental service with sleek design, responsive layout, and user-friendly interface.",
      image: car,
      link: "https://vipin9588.github.io/car/",
    },
     {
      title: "Todo App",
      description: "Html,css,js project for managing tasks with features like adding, editing, and deleting tasks.",
      image: todo,
      link: "https://vipintodo.netlify.app/",
    },
   
     
    {
      title: "currency Converter",
      description: "Currency converter app using react.js,tailwind css and exchangerate-api",
      image: currencyConverter,
      link: "https://currency-converter2988.netlify.app/",
    },

    
      {
      title: "Ev-olution",
      description: "Simple landing page for electric vehicle company using react.js and tailwindcss",
      image: evOolution,
      link: "https://ev-olution001.netlify.app/",
    },

     {
      title: "Pokemon",
      description: "simple React app using pokeapi to display pokemon data with search functionality.",
      image: Pokemon,
      link: "https://pokemonrk.netlify.app/",
    },

  

  ];

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-scroll">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}
