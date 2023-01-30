import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section3.scss";
import trip from "./slip.png";
import fire from "./fire.png";
import crash from "./collision.png";
import danger from "./dangerzone.png";
import confined from "./confined.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Section3 = () => {
  const location = useLocation();
  useEffect(() => {
    const sectionToScroll = document.getElementById(location.hash.substring(1));
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView();
      const scrollPosition = window.pageYOffset;
      console.log(scrollPosition);
    }
  }, []);

  return (
    <div className="Section3">
      <div className="sec1" id="construction">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Construction</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn _1">
              <div className="bar">
                <img src={trip} width="100" alt="" className="img-fluid mt-4" />
                <h3>Slips, Trips and falls</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn _2">
              <div className="bar">
                <img
                  src={crash}
                  width="250"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Vehicle/Machinery Collisions</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={danger}
                  width="200"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Danger Zone Intrusion</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={confined}
                  width="200"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Confined Spaces Hazards</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img src={fire} width="100" alt="" className="img-fluid mt-4" />
                <h3>Fires & Explosions</h3>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Construction`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec2" id="mining">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Mining</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={crash}
                  width="250"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Vehicle Collision</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img src={fire} width="100" alt="" className="img-fluid mt-4" />
                <h3>Explosions and Fires</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={confined}
                  width="200"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Confined Space Accidents</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={confined}
                  width="200"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Hazardous Gas Leak</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <img
                  src={confined}
                  width="200"
                  alt=""
                  className="img-fluid mt-4"
                />
                <h3>Fall of Ground</h3>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Mining`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec3" id="manufacturing">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Manufacturing</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Equipment Failure</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Electrical, Mechanical, or Chemical Hazards</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Product Defects</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Theft & Security Breaches</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Logistics & Invetory Management</h3>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Manufacturing`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec4" id="FacilityManagement">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Facility Management</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Tedious Maintenance</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Space Utilization</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Security Compromises</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Errors in Manual Inspection</h3>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Equipment Monitoring & Maintenance</h3>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/FacilityManagement`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Section3;
