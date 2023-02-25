import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.png";
const OilandGasContent = () => {
  return (
    <div className="oilandgasContent">
      <Container>
        <Row className="d-flex justify-content-center align-items-start">
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img1} alt="" className="img-fluid mb-5" />
            <h4>Pipeline monitoring</h4>
            <p>
              Safety Brain monitors pipelines for potential hazards in
              real-time.
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img2} alt="" className="img-fluid mb-5" />
            <h4>Suspicious/Unattended Object Alerts</h4>
            <p>
              Instant alerts on unattended/suspicious objects for optimizing
              space
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img3} alt="" className="img-fluid mb-5" />
            <h4>Advanced Security Surveillance</h4>
            <p>
              AI powered video surveillance for round-the-clock monitoring of
              facility without any blind spot
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img4} alt="" className="img-fluid mb-5" />
            <h4>Asset tracking</h4>
            <p>Safety Brain monitors the location and movement of assets.</p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img5} alt="" className="img-fluid mb-5" />
            <h4>Worker performance</h4>
            <p>
              Safety Brain identifies areas for improvement in worker
              performance.
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img6} alt="" className="img-fluid mb-5" />
            <h4>Waste Classification & Management</h4>
            <p>
              Smart AI-powered solutions for on-site classification &
              segregation of wastes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OilandGasContent;
