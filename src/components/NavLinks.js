import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles.scss";

export default function NavBar() {
  const links = ["About", "Projects", "Skills", "Contact"];
  const navLinks = links.map(link => {
    return(
      <Nav.Link>
        <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          { link }
        </Link>
      </Nav.Link>
    )
  });
  return <Nav.Item>{ navLinks }</Nav.Item>;
}