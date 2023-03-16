import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import "./Landing.scss";
import landingImg from "../../../assets/landingBg.png";
import construction from "../../Products/List/construction.png";
import facMan from "../../Products/List/facilityManagement.png";
import healthcare from "../../Products/List/healthcare.jpg";
import manufacturing from "../../Products/List/manufacturing.png";
import mining from "../../Products/List/mining.png";
import oilgas from "../../Products/List/oil&gas.jpg";
import transportation from "../../Products/List/transportation.jpg";
import Slider from "react-slick";

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };
  return (
    <section className="landingSection">
      <div className="slick">
        <Slider {...settings}>
          <div>
            <img src={landingImg} className="slickImg" alt="" />
          </div>
          <div>
            <img src={construction} className="slickImg" alt="" />
          </div>
          <div>
            <img src={facMan} className="slickImg" alt="" />
          </div>
          <div>
            <img src={healthcare} className="slickImg" alt="" />
          </div>
          <div>
            <img src={manufacturing} className="slickImg" alt="" />
          </div>
          <div>
            <img src={mining} className="slickImg" alt="" />
          </div>
          <div>
            <img src={oilgas} className="slickImg" alt="" />
          </div>
          <div>
            <img src={transportation} className="slickImg" alt="" />
          </div>
        </Slider>
      </div>
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
          <Link to="/user">
            <Button label="Schedule Free Demo" />
          </Link>
        </Container>
      </div>
    </section>
  );
};

export default Landing;
