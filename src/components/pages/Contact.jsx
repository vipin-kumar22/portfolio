import React, { useContext, useRef, useState } from 'react';

import { TbPhoneCall } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

import { ThemeContext } from '../Theme';
import Card from '../socialLink';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [status, setStatus] = useState("");
console.log(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className={`font-sans px-4 overflow-y-scroll w-full h-full ${theme.text1}`}>
      <div className="text-center mb-4" data-aos="fade-up">
        <h1 className={`text-3xl font-bold ${theme.text1} p-2 mb-4`}>Get In Touch</h1>
        <p className={`${theme.text1} max-w-2xl mx-auto text-lg`}>
          Feel free to reach out with any questions, feedback, or opportunities. I'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Form Section */}
        <div className={`${theme.bgColor2} rounded-xl shadow-md px-2 py-4`} data-aos="fade-right">
          <h2 className={`text-xl font-semibold ${theme.text1} mb-6`}>Send a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className='px-3'>
              <label htmlFor="name" className={`block text-lg font-medium ${theme.text1} mb-1`}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className={`w-full px-4 py-3 rounded-lg ${theme.bgColor2} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
              />
            </div>

            <div className='px-3'>
              <label htmlFor="email" className={`block text-lg font-medium ${theme.text1} mb-1`}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@example.com"
                required
                className={`w-full px-4 py-3 rounded-lg ${theme.bgColor2} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
              />
            </div>

            <div className='px-3'>
              <label htmlFor="subject" className={`block text-lg font-medium ${theme.text1} mb-1`}>Subject</label>
              <select
                id="subject"
                name="subject"
                defaultValue=""
                className={`w-full px-4 py-3 rounded-lg ${theme.bgColor2} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
              >
                <option value="" disabled>Select a topic</option>
                <option value="work">Work Opportunity</option>
                <option value="feedback">Portfolio Feedback</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='px-3'>
              <label htmlFor="message" className={`block text-lg font-medium ${theme.text1} mb-1 p-2`}>Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your thoughts here..."
                required
                className={`w-full px-4 py-3 rounded-lg ${theme.bgColor2} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Send Message
            </button>

            {status && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-2">{status}</div>}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8">
          <div>
            <h2 className={`text-xl font-semibold ${theme.text1} mb-6`}>Contact Information</h2>
            <p className={`${theme.text1} mb-6 text-lg`}>You can also reach out to me through these channels. I typically respond within 24 hours.</p>
          </div>

          <div className={`${theme.bgColor2} rounded-xl shadow-md p-6`}>
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <MdOutlineMailOutline className="text-indigo-600 w-5 h-5"/>
              </div>
              <div>
                <h3 className={`font-medium text-lg ${theme.text1}`}>Email</h3>
                <a href="mailto:vipinkumar.ak40@gmail.com" className="text-blue-600 text-md hover:underline">vipinkumar.ak40@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <GrLocation className="text-indigo-600 w-5 h-5"/>
              </div>
              <div>
                <h3 className={`font-medium text-lg ${theme.text1}`}>Phone</h3>
                <a href="tel:+919588738897" className="text-blue-600 text-md hover:underline">9588738897</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <TbPhoneCall className="text-blue-600 w-5 h-5"/>
              </div>
              <div>
                <h3 className={`font-medium text-lg ${theme.text1}`}>Location</h3>
                <p className="text-blue-400 text-md">Haryana, India</p>
              </div>
            </div>
          </div>

          <div className={`${theme.bgColor2} rounded-xl shadow-md p-6 `}>
            <h3 className={`font-medium ${theme.text1} `}>Connect With Me</h3>
            <div className={`flex space-x-4 m-8 ${theme.bgColor2}`}>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
