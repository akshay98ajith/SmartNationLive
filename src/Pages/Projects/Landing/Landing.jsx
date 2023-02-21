import React from "react";
import { Container } from "react-bootstrap";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="bgColor">
        <Container>
          {/* <h1>Safety Brain</h1> */}
          <h2>Our Use Cases</h2>
          {/* <p>Smart Solutions for Every Jobsite Safety</p> */}
        </Container>
      </div>
    </div>
  );
};

export default Landing;
