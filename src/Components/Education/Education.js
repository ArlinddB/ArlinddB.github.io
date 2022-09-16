import React from "react";
import Card from 'react-bootstrap/Card';
import "./Education.css"
import { Fade } from "react-reveal";

const Education = () => {
  return (
    <div className="d-flex flex-column align-items-center pt-5 pb-5 edCard">
        <Fade top duration={800}>
            <h2 className="education_title">Education</h2>
            <Card className="education_card" >
            <Card.Body>
                <a href="https://www.ubt-uni.net/" target="_blank" style={{textDecoration: "none", color: '#1773d4'}}><Card.Title>University for Business and Technology - UBT 🔗</Card.Title></a>
                <Card.Subtitle className="mb-2 text-muted">Computer Science and Engineering</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">2020 - Present</Card.Subtitle>            
            </Card.Body>
            </Card>
        </Fade>
    </div>
  );
};

export default Education;
