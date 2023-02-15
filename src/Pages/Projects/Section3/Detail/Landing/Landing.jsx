import React from "react";
import { Container } from "react-bootstrap";
import "./Landing.scss";
const Landing = (props) => {
  return (
    <div className="Landing">
      <div className="bgColor">
        <Container>
          <h2 className="text-center">{props.title}</h2>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
