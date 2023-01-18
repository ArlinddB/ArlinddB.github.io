import React from "react";
import "./Home.css";
import Lottie from "react-lottie";
import anm from "../../lottie/programming.json";
import Fade from "react-reveal/Fade";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anm,
  };

  return (
    <div className="d-flex justify-content-center pt-5 pb-5 mt-5 homeContainer">
      <Fade left duration={800}>
        <div>
          <div className="writer">
            <TypeWriterEffect
              textStyle={{ fontSize: "22px", textAlign: "right" }}
              startDelay={150}
              cursorColor="black"
              text="Hi, I'm Arlind Berisha a computer science student majoring in Web Development"
              typeSpeed={50}
              hideCursorAfterText={true}
            />
          </div>
          <div className="resumeBtn">
            <a href="https://drive.google.com/file/d/1pfxUxp3Tr3vdQm9aY5Jy97hgrsWqCegG/view?usp=share_link">
              <button className="resume">
                <i class="fa-solid fa-file"></i>See My Resume
              </button>
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/arlind-berisha/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ArlinddB" target="_blank">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </div>
        </div>
      </Fade>
      <div className="animation">
        <Fade right duration={800}>
          <Lottie options={defaultOptions} />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
