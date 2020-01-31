import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import NavLinks from "./NavLinks";
import "../styles.scss";

export default function NavBar() {
  return (
    <Navbar className="App" expand="lg" bg="dark">
      <Navbar.Brand>
        Cool Yank
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav className="inline">
          <NavLinks />
          <Button variant="outline-success">Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}