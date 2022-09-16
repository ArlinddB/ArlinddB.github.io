import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Pulse from "react-reveal/Pulse";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Pulse>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h4>{data.name}</h4>
                <p className="description mt-3">{data.desc}</p>
                {data.github ? (
                  <span className="btn-inner">
                    <a href={data.github} target="_blank">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </span>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Pulse>
    </Col>
  );
};

export default ProjectsCard;
