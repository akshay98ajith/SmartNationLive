import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.png";
const HealthcareContent = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-end">
          <Col xs={4} className="text-center p-5">
            <img src={img1} alt="" className="img-fluid mb-5" />
            <h4>Visitor tracking</h4>
            <p>
              Safety Brain tracks visitors and their location within the
              hospital to ensure visitor safety and security
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img2} alt="" className="img-fluid mb-5" />
            <h4>Emergency response</h4>
            <p>
              Safety Brain provides data to emergency response teams for faster
              and more effective responses in case of medical emergencies.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img3} alt="" className="img-fluid mb-5" />
            <h4>Employee tracking</h4>
            <p>
              Safety Brain tracks the location and activity of healthcare
              workers to optimize workflow and ensure employee safety.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img4} alt="" className="img-fluid mb-5" />
            <h4>Patient monitoring</h4>
            <p>
              Safety Brain monitors patients remotely and sends alerts to
              healthcare providers if any abnormal activity is detected.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img5} alt="" className="img-fluid mb-5" />
            <h4>Medication tracking</h4>
            <p>
              Safety Brain tracks the distribution and usage of medication to
              ensure accurate dispensing and prevent medication errors
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
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

export default HealthcareContent;
