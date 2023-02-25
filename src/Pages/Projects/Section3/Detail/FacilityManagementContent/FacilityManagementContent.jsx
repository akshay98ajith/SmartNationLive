import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import "./FacilityManagementContent.scss";

const FacilityManagementContent = () => {
  return (
    <div className="FacilityManagementContent">
      <Container>
        <Row className="d-flex justify-content-center align-items-start">
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img1} alt="" className="img-fluid mb-5" />
            <h4>Automated Face Recognition</h4>
            <p>
              Automated facial recognition of visitors for tracking attendance
              and access in the facility
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
            <h4>Automated Visitor Records</h4>
            <p>
              Smart monitoring system for real-time occupancy monitoring for
              better facilities space management
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img4} alt="" className="img-fluid mb-5" />
            <h4>Space Usage Utilization</h4>
            <p>
              Remote PPE checks through video help managers ensure miners are
              wearing hard hats and other PPE in hazardous mining environments.
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center p-5">
            <img src={img5} alt="" className="img-fluid mb-5" />
            <h4>Advanced Security Surveillance</h4>
            <p>
              AI powered video surveillance for round-the-clock monitoring of
              facility without any blind spot
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

export default FacilityManagementContent;
