import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../Components/Button/Button";
import aboutImg from "./../../../assets/video-overlay.png";
import { motion } from "framer-motion";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="aboutSection">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm={12} md={6} className="text-center text-md-start">
            <div className="overflow-hidden">
              <motion.h2
                className="scrollAnim"
                initial={{ opacity: 0, skewY: 5, translateY: 50 }}
                whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
                viewport={{ once: true }}
              >
                What is Safety Brain?
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h5
                className="scrollAnim"
                initial={{ opacity: 0, skewY: 5, translateY: 50 }}
                whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
                viewport={{ once: true }}
              >
                Streamlined, Controlled, Seamless & Automated Health & Safety
                Compliance Management Solution, Designed to Save Time &
                Resources.
              </motion.h5>
            </div>
            <div className="my-3">
              <div className="overflow-hidden">
                <motion.p
                  className="scrollAnim"
                  initial={{ opacity: 0, skewY: 5, translateY: 50 }}
                  whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
                  viewport={{ once: true }}
                >
                  Safety Brain is a construction safety management solution
                  which helps improve Jobsite safety, manage compliances and
                  analyze accumulated data for Smart usage of Time & resources
                  to avoid accidents & injuries.
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  className="scrollAnim"
                  initial={{ opacity: 0, skewY: 5, translateY: 50 }}
                  whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
                  viewport={{ once: true }}
                >
                  The AI Engine and seamless connectivity within the Safety
                  Brain Ecosystem are Designed to ensure adaptive suggestions
                  towards effective workflow management.
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  className="scrollAnim"
                  initial={{ opacity: 0, skewY: 5, translateY: 50 }}
                  whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
                  viewport={{ once: true }}
                >
                  The Safety Brain Team is hyper-focused on ensuring seamless
                  connectivity via all devices and platforms at all times.
                </motion.p>
              </div>
            </div>
            <Link to='/user'>
              <Button label="Explore Safety Brain" />
            </Link>
          </Col>
          <Col sm={12} md={5} className="text-center">
            <motion.img
              src={aboutImg}
              alt=""
              className="img-fluid"
              initial={{ opacity: 0, skewY: 5, translateY: 50 }}
              whileInView={{ opacity: 1, skewY: 0, translateY: 0 }}
              viewport={{ once: true }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
