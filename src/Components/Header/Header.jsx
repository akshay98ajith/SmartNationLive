import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { headLinks } from "../../Constants/Constants";
import headLogo from "./../../assets/headLogo.png";
import "./Header.scss";
const Header = () => {
    
  return (
    <>
      <Navbar expand="lg" className="header position-fixed w-100 bg-white py-4" onClick={()=>{console.log(Navbar);}}>
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
                  <Link to={obj.link} className="mx-3 navLinks" key={obj.id}>
                    {obj.label}
                  </Link>
                );
              })}
              <Link to="/user">
                <Button label="Free Trial" />
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
