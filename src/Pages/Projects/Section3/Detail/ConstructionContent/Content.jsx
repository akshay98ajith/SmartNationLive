import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Content.scss";
import bg1_1 from "./bg1_1.png";
import bg1_2 from "./bg1_2.png";
import bg1_3 from "./bg1_3.png";
import bg1_4 from "./bg1_4.png";
import bg1_5 from "./bg1_5.png";
import bg1_6 from "./bg1_6.png";
import bg2_1 from "./bg2_1.png";
import bg2_2 from "./bg2_2.png";
import bg2_3 from "./bg2_3.png";
import bg3_1 from "./bg3_1.png";
import bg3_2 from "./bg3_2.png";
import bg3_3 from "./bg3_3.png";
import bg3_4 from "./bg3_4.png";
const Content = () => {
  return (
    <div className="ContentDesc">
      <h3 className="text-center mt-5">Areas of Application</h3>
      <Container fluid="lg">
        <div className="img1Bg d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center">
          <div className="d-flex flex-column justify-content-evenly">
            <div className="d-flex justify-content-start align-items-center">
              <div className="mx-4">
                <img src={bg1_1} alt="" className="img-fluid" />
              </div>
              <h5>PPE Detection</h5>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <div className="mx-4">
                <img src={bg1_2} alt="" className="img-fluid" />
              </div>
              <h5>Fire & Smoke Detection</h5>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <div className="mx-4">
                <img src={bg1_3} alt="" className="img-fluid" />
              </div>
              <h5>Danger Zone Instrusion Alerts</h5>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-evenly">
            <div className="d-flex align-items-center flex-lg-row-reverse">
              <div className="mx-4">
                <img src={bg1_4} alt="" className="img-fluid" />
              </div>
              <h5>Slip, Trip & Falls Alert</h5>
            </div>
            <div className="d-flex align-items-center flex-lg-row-reverse">
              <div className="mx-4">
                <img src={bg1_5} alt="" className="img-fluid" />
              </div>
              <h5>Confined Space Work Monitoring</h5>
            </div>
            <div className="d-flex align-items-center flex-lg-row-reverse">
              <div className="mx-4">
                <img src={bg1_6} alt="" className="img-fluid" />
              </div>
              <h5>Vehicle/ Machinery Collision Alert</h5>
            </div>
          </div>
        </div>
        <div className="img2Bg d-flex flex-column justify-content-evenly align-items-end me-lg-5 pe-lg-5">
          <div className="d-flex justify-content-start align-items-center">
            <h5>Progress Tracking</h5>
            <div className="ms-4">
              <img src={bg2_1} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <h5>Excavation Progress Tracking</h5>
            <div className="ms-4">
              <img src={bg2_2} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <h5>Fleet Management</h5>
            <div className="ms-4">
              <img src={bg2_3} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="img3Bg d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-evenly">
            <div className="d-flex justify-content-start align-items-center">
              <div className="me-4">
                <img src={bg3_1} alt="" className="img-fluid" />
              </div>
              <h5>Automatic Worker Counting</h5>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <div className="me-4">
                <img src={bg3_2} alt="" className="img-fluid" />
              </div>
              <h5>Material Classification Detection</h5>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-evenly">
            <div className="d-flex justify-content-end align-items-center">
              <h5>Face Recognition</h5>
              <div className="ms-4">
                <img src={bg3_3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <h5>Unauthorized Access Detection</h5>
              <div className="ms-4">
                <img src={bg3_4} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;
