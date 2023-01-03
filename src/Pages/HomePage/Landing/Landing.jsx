import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Landing.scss";

const Landing = () => {
  return (
    <section className="landingSection">
      <div className="bgColor text-center text-md-start">
        <Container style={{ marginBottom: "4rem" }}>
          <h1>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center">
              <div className="landAnim">S</div>
              <div className="landAnim">a</div>
              <div className="landAnim">f</div>
              <div className="landAnim">e</div>
              <div className="landAnim">t</div>
              <div className="landAnim">y</div>
              <div className="landAnim">-</div>
              <div className="landAnim">B</div>
              <div className="landAnim">r</div>
              <div className="landAnim">a</div>
              <div className="landAnim">i</div>
              <div className="landAnim">n</div>
            </div>
            {/* Start-to-Finish Safety & Compliance Management Software */}
          </h1>
          <div className="overflow-hidden">
            <p>
              A Complete Solution for your Health and Safety Compliance Needs.
            </p>
          </div>
          <div className="d-md-flex">
            <h5>Ai Powered</h5>
            <h5>Easy to Use</h5>
            <h5>Quick to Deploy</h5>
            <h5>24 X 7 Expert Help</h5>
          </div>
          <Link to='/user'>
            <Button label="Schedule Free Demo" />
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Landing;
