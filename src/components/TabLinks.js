import React from "react";
import { Nav } from "react-bootstrap";

const jobs = [
  {
    company: "Freelance",
    title: "Full-Stack Developer"
  },
  {
    company: "Freelance",
    title: "Front-End Developer"
  },
  {
    company: "Pellet Grill Pros",
    title: "Web Developer"
  },
  {
    company: "AAL-USA, Inc.",
    title: "Maintenance/HR Manager"
  }
];

export default function TabLinks() {
  const links = jobs.map((link) => {
    return(
      <Nav.Item>
        <Nav.Link eventKey={link.title}>{"{ "}{link.title}{" }"}</Nav.Link>
      </Nav.Item>
    )
  });
  return <Nav>{links}</Nav>;
}

