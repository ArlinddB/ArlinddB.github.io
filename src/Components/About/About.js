import React from 'react'
import "./About.css"
import Lottie from "react-lottie";
import developer from "../../lottie/developer.json";
import Fade from "react-reveal/Fade";

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: developer,
    };


  return (
    <div className="d-flex justify-content-center pt-5 pb-5 aboutContainer">
        <Fade>
        <div className="animation">
          <Lottie options={defaultOptions} />
        </div>
        <div className="aboutText">
            <h2>Know Who <span>I'm</span></h2>
            <p>I am Arlind Berisha. I am currently undergrad in 
                computer science and engineering specialing in Web Development. 
                I am a web developer and I'm interesed in blockchain technology.
            </p>
        </div>
        </Fade>
    </div>
  )
}

export default About