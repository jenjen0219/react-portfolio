// import { useLocation } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import '../App.css'


function Navigation() {
  let location = useLocation();

  return (
    <>

      <Navbar expand="lg" >
        <Container fluid >
          <Navbar.Brand style={{ color: "#487b72", fontSize: "1.5rem", fontFamily: "'Antonio', sans-serif" }} href="/">Jennifer Gutierrez Manjares - JGM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto  justify-content-end flex-grow-1 pe-3 "
              activeKey={location.pathname}
            >
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation
