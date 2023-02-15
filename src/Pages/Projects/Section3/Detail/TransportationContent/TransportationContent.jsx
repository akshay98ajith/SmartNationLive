import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.png";
const TransportationContent = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-end">
          <Col xs={4} className="text-center p-5">
            <img src={img1} alt="" className="img-fluid mb-5" />
            <h4>Vehicle monitoring</h4>
            <p>Safety Brain tracks the location and performance of vehicles.</p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img2} alt="" className="img-fluid mb-5" />
            <h4>Loading / unloading</h4>
            <p>
              Safety Brain monitors loading and unloading operations for safety
              and efficiency.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img3} alt="" className="img-fluid mb-5" />
            <h4>Advanced Security Surveillance</h4>
            <p>
              AI powered video surveillance for round-the-clock monitoring of
              facility without any blind spot
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img4} alt="" className="img-fluid mb-5" />
            <h4>Driver behavior</h4>
            <p>
              Safety Brain monitors driver behavior to improve safety and reduce
              accidents.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img5} alt="" className="img-fluid mb-5" />
            <h4>Carbon emissions</h4>
            <p>
              Safety Brain tracks carbon emissions and identifies areas for
              improvement.
            </p>
          </Col>
          <Col xs={4} className="text-center p-5">
            <img src={img6} alt="" className="img-fluid mb-5" />
            <h4>Geofencing</h4>
            <p>
              Safety Brain can use geofencing to set boundaries and monitor when
              vehicles enter or leave certain areas.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransportationContent;
