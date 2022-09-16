import React from "react";
import { projects } from "./ProjectsData";
import { Container, Row } from "reactstrap";
import ProjectsCard from "./ProjectsCard";
import { Fade } from "react-reveal";

const Projects = () => {
	return projects && (
		<section className="section section-lg pt-4 pb-4">
                <Container>
                    <div className="d-flex pt-5 pb-1">
                        <Fade left duration={800}>

                            <div>
                                <div className="mt-2">
                                    <i class="fa-solid fa-computer fa-xl"></i>
                                </div>
                            </div>
                            <div className="pl-4">
                                <h2>Projects</h2>
                            </div>
                        </Fade>

                    </div>
                    <Row className="row-grid align-items-center">
                        {projects.map((data, i) => {
                            return <ProjectsCard key={i} data={data} />;
                        })}
                    </Row>
                </Container>
		</section>
	);
};

export default Projects;