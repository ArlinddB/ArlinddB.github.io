import React, { useState } from "react"
import { CgMenu, CgClose } from "react-icons/cg"
import { Link } from "react-scroll"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  
  return (
    <>
      <nav>
        <div className="container">
          <span id="brand">
            
          </span>

          <ul id="menu">
            <li>
            <Link to="/" spy={true} smooth={true} offset={-250} duration={500}>
                Home
            </Link>
            </li>
            <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                Projects
            </Link>
            </li>
            <li>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                Skills
            </Link>
            </li>
            <li>
            <Link to="education" spy={true} smooth={true} offset={-100} duration={500}>
                Education
            </Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

          <div id="toggle" onClick={() => setClicked(!clicked)}>
            <CgMenu/>
          </div>
        </div>
      </nav>

      <div id="resize" className={`${clicked ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setClicked(!clicked)}>
            <CgClose />
        </div>

        <ul id="menu">
            <li>
            <Link to="/" spy={true} smooth={true} offset={-250} duration={500}>
                Home
            </Link>
            </li>
            <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                Projects
            </Link>
            </li>
            <li>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                Skills
            </Link>
            </li>
            <li>
            <Link to="education" spy={true} smooth={true} offset={-100} duration={500}>
                Education
            </Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Navbar