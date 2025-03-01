import React from "react";
import '../Navbar/navbar.scss';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHome() {
  return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/store">Store</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contacts">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/user/cart">Cart</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">
                                SignUp
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavbarHome;