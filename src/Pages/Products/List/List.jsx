import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./List.scss";
import construction from "./construction.png";
import mining from "./mining.png";
import manufacturing from "./manufacturing.png";
import facManagement from "./facilityManagement.png";
import oilgas from "./oil&gas.jpg";
import transportation from "./transportation.jpg";
import healthcare from "./healthcare.jpg"
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="ProductsList">
      <Container>
        <Row>
          <Col md={6} className="colNew">
            <img src={construction} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Construction</h4>
            <p>
              Digitizing construction Jobsite to improve safety, enhance
              workflow and prevent environmental non-compliances using World's
              first Scenario based AI, Video Analytics enabled Construction
              Management Software
            </p>
            <Link to={`/Product-Platform#construction`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row className="flex-sm-row-reverse">
          <Col md={6} className="colNew">
            <img src={mining} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Mining</h4>
            <p>
              Deriving value from data using Scenario-based AI powered Video
              Analytics for critical mining sites to optimize processes, enhance
              decision-making and improve safety.
            </p>
            <Link to={`/Product-Platform#mining`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="colNew">
            <img src={manufacturing} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Manufacturing</h4>
            <p>
              AI-powered industrial grade Video Analytics for ensuring real-time
              monitoring of manufacturing firms to improve process efficiency
              and ensure the health & safety of workers with minimum efforts and
              errors
            </p>
            <Link to={`/Product-Platform#manufacturing`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row className="flex-sm-row-reverse">
          <Col md={6} className="colNew">
            <img src={facManagement} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Facility Management</h4>
            <p>
              Redefining Facility Management with the power of Scenario-based AI
              to ensure fool-proof infrastructure maintenance using real-time
              and historical data
            </p>
            <Link to={`/Product-Platform#FacilityManagement`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="colNew">
            <img src={oilgas} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Oil and Gas</h4>
            <p>
              Monitor the movement of personnel and vehicles on drilling rigs
              and other hazardous areas to ensure safety
            </p>
            <Link to={`/Product-Platform#Oil&Gas`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row className="flex-sm-row-reverse">
          <Col md={6} className="colNew">
            <img src={transportation} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Transportation</h4>
            <p>
              Monitor workers for compliance with safety procedures and track
              the movement of vehicles and personnel to prevent accidents.
            </p>
            <Link to={`/Product-Platform#Transportation`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="colNew">
            <img src={healthcare} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="ProductCards colNew">
            <h4>Healthcare</h4>
            <p>
              Monitor patient and staff movements to ensure their safety and to
              prevent the spread of infection.
            </p>
            <Link to={`/Product-Platform#Healthcare`} className="btn ">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default List;
