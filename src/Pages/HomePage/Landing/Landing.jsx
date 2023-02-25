import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import Button from "../../../Components/Button/Button";
import "./Landing.scss";
// import landingImg from "../../../assets/landingBg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landing = () => {
  // const setting = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };
  return (
    <section className="landingSection">
      <div className="bgColor text-center text-md-start">
        <Container style={{ marginBottom: "4rem" }}>
      {/* <div className="slick">
        <Slider {...setting}>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
          <div>
            <img src={landingImg} alt="" />
          </div>
        </Slider>
      </div> */}
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
