import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section3.scss";
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
                <h3>Workforce Safety</h3>
                <p>
                  Safety Brain can be used to monitor the construction site,
                  ensuring that workers are working safely and reducing the risk
                  of accidents. For example, Safety Brain can detect when a
                  worker is not wearing protective gear, allowing for prompt
                  response and reducing the risk of accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn _2">
              <div className="bar">
                <h3>Equipment Safety</h3>
                <p>
                  Safety Brain can be used to monitor construction equipment,
                  ensuring it is functioning properly and reducing downtime. For
                  example, Safety Brain can monitor the performance of heavy
                  machinery, allowing for prompt response and reducing downtime.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Site Security</h3>
                <p>
                  Safety Brain can be used to monitor the construction site,
                  ensuring it is secure and reducing the risk of theft or
                  damage. For example, Safety Brain can detect unauthorized
                  access to the site, allowing for prompt response and reducing
                  the risk of theft or damage.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Traffic Management</h3>
                <p>
                  Safety Brain can be used to monitor traffic in and around the
                  construction site, ensuring it is managed safely and reducing
                  the risk of accidents. For example, Safety Brain can detect
                  when vehicles are not following traffic rules, allowing for
                  prompt response and reducing the risk of accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                {/* <img src={fire} width="100" alt="" className="img-fluid mt-4" /> */}
                <h3>Hazard Detection</h3>
                <p>
                  Safety Brain can be used to monitor the construction site for
                  potential hazards, allowing for prompt response and reducing
                  the risk of accidents. For example, Safety Brain can detect
                  when a worker is in danger of falling, allowing for prompt
                  response and reducing the risk of accidents.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Construction`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec2" id="mining">
        <Container className="mt-5 pt-5">
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
                <h3>Monitoring workers</h3>
                <p>
                  Safety Brain can be used to monitor workers to ensure that
                  they are following safety protocols such as wearing proper
                  safety gear, following safe lifting practices, and avoiding
                  hazardous areas. This can help to prevent workplace accidents
                  and injuries.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Equipment inspection</h3>
                <p>
                  Heavy machinery is crucial to the mining industry and its
                  proper functioning is crucial to the safety of workers and the
                  success of operations. Safety Brain can be used to monitor the
                  performance of heavy machinery and detect any malfunctions
                  before they lead to serious accidents or downtime.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Site surveillance</h3>
                <p>
                  Mining sites can be large and spread out, making it difficult
                  to monitor the entire area. Safety Brain can be used to
                  monitor the site, detecting unauthorized access and theft, and
                  preventing potential security risks.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Emergency response</h3>
                <p>
                  In case of an emergency, Safety Brain can provide footage to
                  assist with quick and effective response. This can help to
                  minimize damage and prevent accidents from escalating.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Environmental monitoring</h3>
                <p>
                  Mining has the potential to impact the environment, and it's
                  crucial to monitor the impact of mining activities. Safety
                  Brain can monitor the environment, detecting and preventing
                  potential environmental damage.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Mining`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec3" id="manufacturing">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Manufacturing</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Monitoring production line</h3>
                <p>
                  Safety Brain can be used to monitor the workers, machines, and
                  the production line in real-time, detecting any safety hazards
                  and alerting management so that they can take corrective
                  action. This can help prevent accidents, injuries, and damage
                  to machinery.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Quality control</h3>
                <p>
                  Safety Brain can monitor the production process, from raw
                  materials to finished products, to detect any quality control
                  issues, such as defects in materials or incorrect assembly
                  processes. By catching these issues before the products leave
                  the facility, manufacturers can ensure that only high-quality
                  products reach the market.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Inventory management</h3>
                <p>
                  Safety Brain can monitor the storage and handling of raw
                  materials and finished products to ensure proper procedures
                  are followed and prevent theft or damage. This can help
                  prevent loss of inventory and ensure the safety of workers
                  handling the materials.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Worker performance</h3>
                <p>
                  Safety Brain can monitor the workers to identify areas for
                  improvement in worker performance, such as incorrect
                  procedures or slow work speed. This information can be used to
                  provide targeted training and improve worker performance,
                  leading to higher efficiency and productivity.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Environmental monitoring</h3>
                <p>
                  Safety Brain can monitor the manufacturing facility to detect
                  potential environmental hazards, such as gas leaks or spills,
                  and ensure that the facility is in compliance with
                  environmental regulations. This can help prevent environmental
                  incidents, maintain a safe work environment, and reduce the
                  risk of fines.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Manufacturing`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec4" id="FacilityManagement">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Facility Management</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Energy Management</h3>
                <p>
                  Safety Brain can be used to monitor energy consumption and
                  detect energy waste, leading to cost savings and improved
                  sustainability. For example, Safety Brain can detect when
                  lights or HVAC systems are left on when they should be turned
                  off, reducing energy consumption and costs.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Occupant Safety</h3>
                <p>
                  Safety Brain can be used to monitor building occupants,
                  ensuring they follow established safety procedures and work in
                  a safe environment. For example, Safety Brain can detect when
                  someone is in a restricted area or when a fire alarm has been
                  triggered, allowing for prompt response to improve safety.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Space Utilization</h3>
                <p>
                  Safety Brain can be used to monitor space utilization,
                  providing valuable data to optimize space planning and reduce
                  costs. For example, Safety Brain can monitor the occupancy of
                  meeting rooms, leading to more efficient space utilization and
                  cost savings.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Incident Investigation</h3>
                <p>
                  In the event of an incident or accident in the facility,
                  Safety Brain can provide valuable footage to assist in the
                  investigation and identify root causes. For example, Safety
                  Brain can identify the cause of a fire or determine how an
                  injury occurred, leading to improved safety and reduced risk.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Maintenance Management</h3>
                <p>
                  Safety Brain can be used to monitor building systems and
                  detect maintenance issues, leading to improved facility
                  maintenance and reduced downtime. For example, Safety Brain
                  can detect when a machine needs maintenance or when a water
                  leak is occurring, allowing for prompt response and reduced
                  downtime.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/FacilityManagement`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec5" id="Oil&Gas">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Oil and Gas</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Process Monitoring</h3>
                <p>
                  Safety Brain can be used to monitor critical processes and
                  detect potential problems, ensuring safe and efficient
                  operations. For example, Safety Brain can monitor pipeline
                  flow rates and detect anomalies, allowing for prompt response
                  and reducing the risk of spills or other safety incidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Environmental Compliance</h3>
                <p>
                  Safety Brain can be used to monitor environmental conditions,
                  ensuring compliance with environmental regulations and
                  reducing the risk of penalties. For example, Safety Brain can
                  monitor air and water quality, allowing for prompt response
                  and reducing the risk of penalties.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Asset Monitoring</h3>
                <p>
                  Safety Brain can be used to monitor oil and gas assets,
                  ensuring they are functioning properly and reducing downtime.
                  For example, Safety Brain can monitor drilling rig operations,
                  allowing for prompt response and reduced downtime.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Vehicle Management</h3>
                <p>
                  Safety Brain can be used to monitor vehicles, ensuring they
                  are driven safely and reducing the risk of accidents. For
                  example, Safety Brain can monitor speed and road conditions,
                  allowing for prompt response and reducing the risk of
                  accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Emergency Response</h3>
                <p>
                  In the event of an emergency, Safety Brain can provide
                  valuable footage to assist in the emergency response. For
                  example, Safety Brain can provide footage of a fire or spill,
                  allowing emergency responders to quickly assess the situation
                  and take appropriate action.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/Oil&Gas`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec6" id="Transportation">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Transportation</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Fleet Monitoring</h3>
                <p>
                  Safety Brain can be used to monitor vehicles in a
                  transportation fleet, ensuring they are driven safely and
                  reducing the risk of accidents. For example, Safety Brain can
                  monitor speed and road conditions, allowing for prompt
                  response and reducing the risk of accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Driver Behavior</h3>
                <p>
                  Safety Brain can be used to monitor driver behavior, ensuring
                  they follow established safety procedures and work in a safe
                  environment. For example, Safety Brain can detect when a
                  driver is fatigued or distracted, allowing for prompt response
                  and reducing the risk of accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Load Management</h3>
                <p>
                  Safety Brain can be used to monitor loads, ensuring they are
                  securely loaded and reducing the risk of accidents. For
                  example, Safety Brain can monitor when a load is not properly
                  secured, allowing for prompt response and reducing the risk of
                  accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Vehicle Maintenance</h3>
                <p>
                  Safety Brain can be used to monitor vehicles, ensuring they
                  are functioning properly and reducing downtime. For example,
                  Safety Brain can monitor the performance of brakes and tires,
                  allowing for prompt response and reducing downtime.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Route Monitoring</h3>
                <p>
                  Safety Brain can be used to monitor routes, ensuring they are
                  taken safely and reducing the risk of accidents. For example,
                  Safety Brain can monitor road conditions and detours, allowing
                  for prompt response and reducing the risk of accidents.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/FacilityManagement`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
      <div className="sec7" id="Healthcare">
        <Container className="mt-5 pt-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              sm={12}
              md={4}
              className="inn"
              style={{ pointerEvents: "none" }}
            >
              <div className="bar d-flex justify-content-center">
                <h2>Healthcare</h2>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Patient Safety</h3>
                <p>
                  Safety Brain can be used to monitor patients, ensuring they
                  are safe and reducing the risk of accidents. For example,
                  Safety Brain can detect when a patient is in distress,
                  allowing for prompt response and improving safety.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Staff Safety</h3>
                <p>
                  Safety Brain can be used to monitor staff, ensuring they are
                  working safely and reducing the risk of accidents. For
                  example, Safety Brain can detect when a staff member is
                  fatigued or distracted, allowing for prompt response and
                  reducing the risk of accidents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Equipment Safety</h3>
                <p>
                  Safety Brain can be used to monitor equipment, ensuring it is
                  functioning properly and reducing downtime. For example,
                  Safety Brain can monitor the performance of medical equipment,
                  allowing for prompt response and reducing downtime.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Infection Control</h3>
                <p>
                  Safety Brain can be used to monitor patients and staff for
                  infection control, ensuring that standard procedures are
                  followed and reducing the risk of infections. For example,
                  Safety Brain can detect when patients or staff are not wearing
                  protective equipment, allowing for prompt response and
                  reducing the risk of infections.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} className="inn">
              <div className="bar">
                <h3>Route Monitoring</h3>
                <p>
                  In the event of an emergency, Safety Brain can provide
                  valuable footage to assist in the response. For example,
                  Safety Brain can provide footage of an emergency situation,
                  allowing emergency responders to quickly assess the situation
                  and take appropriate action.
                </p>
              </div>
            </Col>
          </Row>
          <Link to={`/Product-Platform/FacilityManagement`} className="btn ">
            Learn More
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Section3;
