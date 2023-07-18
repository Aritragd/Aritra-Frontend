import React, {useEffect, useState} from 'react'
import './Navbar.css'

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home')

  useEffect (() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const blogsSection = document.getElementById('blogs');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY + 130;
      
      if (
        scrollPosition < aboutSection.offsetTop
        && activeLink !== 'home'
      ) {
        setActiveLink('home');
      } else if (
        scrollPosition >= aboutSection.offsetTop
        && scrollPosition < blogsSection.offsetTop
        && activeLink !== 'about'
      ) {
        setActiveLink('about');
      } else if (
        scrollPosition >= blogsSection.offsetTop
        && scrollPosition < projectsSection.offsetTop
        && activeLink !== 'blogs'
      ) {
        setActiveLink('blogs');
      } else if (
        scrollPosition >= projectsSection.offsetTop
        && scrollPosition < contactSection.offsetTop
        && activeLink !== 'projects'
      ) {
        setActiveLink('projects');
      } else if (
        scrollPosition >= contactSection.offsetTop
        && activeLink !== 'contact'
      ) {
        setActiveLink('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section){
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
    }
  }

  const [navbarColor, setNavbarColor] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if(scrollPosition > threshold){
        setNavbarColor('navbar-colored');
      } else {
        setNavbarColor('');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`navbar ${navbarColor}`}>
      <div className="navbar-content container">
        <div className="navbar-name title">
          Aritra Ghosh Dastidar
        </div> 
        <div className="nav-links">
          <nav>
            <a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a>
            <a href="#blogs" className={activeLink === 'blogs' ? 'active' : ''} onClick={() => scrollToSection('blogs')}>Blogs</a>
            <a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
