import React from 'react'
import "./Skills.css"
import { Fade } from 'react-reveal'


const Skills = () => {
  return (
    <>
      <Fade duration={800}>
            <div className="d-flex flex-column align-items-center pt-5 pb-5">
                <h2 className="skills_title">Skills</h2>
                <div className="pt-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" className="icon" style={{marginLeft: 0}}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="icon"/>
                </div>
                <div className="pt-5 pb-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" className="icon" style={{marginLeft: 0}}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" className="icon"/>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132221.png" className="icon" style={{marginLeft: 0}}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/718/718064.png" className="icon"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className="icon" />
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174881.png" className="icon" />
                </div>
            </div>
        </Fade>
    </>
  )
}

export default Skills;