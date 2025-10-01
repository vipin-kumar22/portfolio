import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import MainLayout from './components/layout/MainLayout.jsx';
import Skill from './components/pages/Skill.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Project from './components/pages/Project.jsx';
import ThemeProvider from './components/Theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skill" element={<Skill />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
)
