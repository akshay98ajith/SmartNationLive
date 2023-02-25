import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import "./ManufacturingContent.scss";

const ManufacturingContent = () => {
  return (
    <div className="manufacturingContent">
      <div className="bg img1">
        <Container style={{ height: "-webkit-fill-available" }}>
          <Row
            className="d-flex justify-content-center align-items-center flex-row-reverse text-center text-sm-start"
            style={{ height: "inherit" }}
          >
            <Col sm={6} className="text-center">
              <img className="img-fluid" src={img1} alt="" />
            </Col>
            <Col sm={5}>
              <h3>PPE Detection</h3>
              <p>
                The smart AI Monitoring system instantly alerts the on-site &
                off-site stakeholders of instances of workers not wearing
                (proper) PPE to take necessary action on-time
              </p>
              <h3>Work at Height Monitoring</h3>
              <p>
                The smart monitoring solution monitors different working at
                height scenarios like missing barriers, improper climbing
                methods, and the like to ensure work at height safety.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg img1">
        <Container style={{ height: "-webkit-fill-available" }}>
          <Row
            className="d-flex justify-content-center align-items-center text-center text-sm-start"
            style={{ height: "inherit" }}
          >
            <Col sm={6} className="text-center">
              <img className="img-fluid" src={img2} alt="" />
            </Col>
            <Col sm={5}>
              <h3>Driver / Operator's Distraction Detection</h3>
              <p>
                The dynamic AI Monitoring System tracks and monitors operator's
                / driver's behaviour, like their inattentiveness while operating
                vehicles / machines to avoid accidents
              </p>
              <h3>Automated Fleet Tracking</h3>
              <p>
                Real-time GPS fleet tracking of vehicles carrying goods from
                manufacturing unit to warehouse ensures safety and optimizes
                fleet operations
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg img1">
        <Container style={{ height: "-webkit-fill-available" }}>
          <Row
            className="d-flex justify-content-center align-items-center flex-row-reverse text-center text-sm-start"
            style={{ height: "inherit" }}
          >
            <Col sm={6} className="text-center">
              <img className="img-fluid" src={img3} alt="" />
            </Col>
            <Col sm={5}>
              <h3>Unauthorized Intrusion Detection</h3>
              <p>
                Instant alerts are sent out as soon as any intruder enters an
                unauthorized area
              </p>
              <h3>Theft Detection</h3>
              <p>
                Instant and real-time alerts are sent out (to on-site & off-site
                stakeholders) as soon as any incident of theft takes place to
                take instant action on the case
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ManufacturingContent;
