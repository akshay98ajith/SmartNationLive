import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MiningContent.scss";
import img1 from "./img2.png";
import img2 from "./img3.png";
import img3 from "./img4.png";
const MiningContent = () => {
  return (
    <div className="miningContent">
      {/* <div className="bg img1"></div> */}
      <div className="bg img1">
        <Container style={{ height: "-webkit-fill-available" }}>
          <Row
            className="d-flex justify-content-between align-items-center"
            style={{ height: "inherit" }}
          >
            <Col xs={3}>
              <h3>PPE Detection</h3>
              <p>
                The dynamic AI monitoring system detects and alerts instances of
                workers violating PPE regulations on the job site, such as not
                wearing hard helmets, safety glasses, hearing protection, and
                the like.
              </p>
            </Col>
            <Col xs={6} className="text-center">
              <img className="img-fluid" src={img1} alt="" />
            </Col>
            <Col xs={3}>
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
      <div className="bg">
        <Container style={{ height: "-webkit-fill-available" }}>
          <Row
            className="d-flex justify-content-around align-items-center"
            style={{ height: "inherit" }}
          >
            <Col xs={4}>
              <img src={img2} alt="" className="img-fluid" />
              <h3>Machinery Collision Detection</h3>
              <p>
                Through video analytics instances of machinery and human
                collisions can be detected to help risk anticipation and
                management.
              </p>
            </Col>
            <Col xs={4}>
              <img src={img3} alt="" className="img-fluid" />
              <h3>Object Free Fall Detection</h3>
              <p>
                AI video analytics can detect instances of falls of ground from
                the mine roof or rib.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MiningContent;
