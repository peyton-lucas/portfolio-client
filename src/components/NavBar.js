import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <Navbar className="App" expand="lg">
      <Navbar.Brand>
        Cool Yank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <NavLinks />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}