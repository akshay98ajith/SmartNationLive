import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../../Components/ContactForm/ContactForm";
import tel from "../../../assets/tel.svg";
import mail from "../../../assets/mail.svg";
import "./ContactSection.scss";
const ContactSection = () => {
  return (
    // <div>
    //     <ContactForm />
    // </div>
    <Container>
      <Row className="d-flex justify-content-center ContactInfo flex-sm-row-reverse mt-5">
        <Col md={5}>
          <ContactForm />
        </Col>
        <Col md={5} className="mt-5">
          <h4>Get In Touch</h4>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={2}>
              <img src={mail} alt="" className="img-fluid" />
            </Col>
            <Col sm={10}>
              <p style={{ fontWeight: "900" }}>Email</p>
              <p>
                <a href="mailto:contactus@smartnation.ai">contactus@smartnation.ai</a>
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={2}>
              <img src={mail} alt="" className="img-fluid" />
            </Col>
            <Col sm={10}>
              <p style={{ fontWeight: "900" }}>Office</p>
              <p>
                Mubadala Tower,
                <br />
                19th Floor,
                <br />
                Abu Dhabi, UAE.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
