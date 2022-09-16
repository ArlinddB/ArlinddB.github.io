import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io"
import Contact from './Contact/Contact'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Footer from './Footer'

const Index = () => {

 const [backToTop, setBackToTop] = useState();

 useEffect(() =>{
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 450){
      setBackToTop(true);
    }
    else{
      setBackToTop(false);
    }
  })
 }, [])

 const scrollUp = () => {
   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 }

  return (
    <>
      <Navbar />
      <div id="/">
        <Home />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="projects">
      <Projects />
      </div>
      
      <div id="skills">
      <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      {backToTop && (
        <i className="fa-regular fa-circle-up toTop" onClick={scrollUp}></i>
      )}
    </>
  )
}

export default Index;