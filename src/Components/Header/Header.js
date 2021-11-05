import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../../Asset/images/logoR.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
            <b>REFERRAL HUB</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/urll">
                <i class="fas fa-user"></i>
              </Nav.Link>
              <Nav.Link href="/urlll">
                <i class="fas fa-bell"></i>
              </Nav.Link>
              <Nav.Link href="/urlll">
                <i class="fas fa-sign-out-alt"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
