import React from "react";
import { Nav } from "react-bootstrap";

export default function NavBar() {
  const links = ["About", "Experience", "Education", "Skills", "Contact"];
  const navLinks = links.map(link => {
    return (
      <Nav.Link href={"#" + link}>
        { link }
      </Nav.Link>
    )
  });
  return <Nav.Item>{ navLinks }</Nav.Item>;
}