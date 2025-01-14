import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black justify-content-between text-white">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand to={'/'} className="text-white fw-bold">
            <h5 className="font-bold">
              <i className="fa-solid fa-heart-pulse text-red-600 text-xl"></i>
              &nbsp; HealthCart
            </h5>
          </Navbar.Brand>
          {/* Toggler for Small Screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white bg-white" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}
            <Nav className="me-auto"></Nav> {/* Adds spacing */}
            <Nav className="text-center">
              <Nav.Link href={'/'} className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href={'/healthBlog'} className="text-white">
                Health Blog
              </Nav.Link>
              <Nav.Link href="#footer" className="text-white">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
