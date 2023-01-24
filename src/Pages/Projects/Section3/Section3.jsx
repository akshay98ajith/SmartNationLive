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
      <div className="sec2">
        <Container>
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
                <h3>Ergonomic Hazards</h3>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Oil&Gas`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec3">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Lifting</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Crane Fall Zone</h3>
                <p>
                  According to OSHA the area in which it is reasonably
                  foreseeable that partially or completely suspended materials
                  could fall in the event of an accident. Using AI, we detect
                  crane fall zones and let you control the number of allowed
                  people, authorized people, PPE regulations, and access limit.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Lifting PPE Regulations</h3>
                <p>
                  To prevent a company's employees from harm caused by lifting
                  risks such as falling objects, each lifting area needs to have
                  a safety guideline for PPE. We provide various scenarios for
                  different PPE requirements at the lifting area to protect
                  members of the lifting crew during the lifting operation.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Wind Speed Alert</h3>
                <p>
                  The wind can affect any size crane, whether it is an
                  all-terrain or crawler crane. Despite the fact that cranes
                  with counterweights weigh significantly more, a strong enough
                  wind can still cause catastrophic damage if not accounted for.
                  Wind speed can be monitored by our wind speed alert using
                  integrated wind speed sensors. If the wind speed exceeds a
                  safety threshold, we can abort the lifting operation.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Lifting Supervisor Control</h3>
                <p>
                  It is up to the crane supervisor to direct and supervise any
                  lifting operation to ensure that it is carried out according
                  to the method statement. A competent and suitably trained
                  individual should have sufficient experience to carry out all
                  relevant duties, as well as the authority to stop the lifting
                  process if it deems it dangerous to proceed.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Human Error Reduction </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  doloribus tempora suscipit quo nemo id aliquam porro, vero
                  distinctio illum blanditiis nam totam, neque esse. Quam ipsum
                  et ab cumque necessitatibus veniam pariatur eveniet beatae
                  recusandae dolorum, hic, qui dolore.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Section3;
