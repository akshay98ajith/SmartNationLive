import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { headLinks } from "../../Constants/Constants";
import headLogo from "./../../assets/headLogo.png";
import "./Header.scss";
import { useState } from "react";
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="header w-100 py-4"
        bg="light"
        variant="light"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        collapseOnSelect
      >
        <Container className="justify-content-between">
          <Link to="">
            <Navbar.Brand>
              <img src={headLogo} alt="" className="img-fluid" />
            </Navbar.Brand>
          </Link>
          {/* <div> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 align-items-center"
              navbarScroll
            >
              {headLinks.map((obj) => {
                return (
                  <Nav.Link
                    as={Link}
                    to={obj.link}
                    className="mx-3"
                    key={obj.id}
                    onClick={() => setExpanded(false)}
                    activeClassName="active"
                  >
                    <div className="navLinks">{obj.label}</div>
                  </Nav.Link>
                );
              })}
              <Nav.Link as={Link} to="/user" onClick={() => setExpanded(false)}>
                <Button label="Free Trial" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
