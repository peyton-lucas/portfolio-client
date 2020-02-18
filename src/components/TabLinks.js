import React from "react";
import { Nav } from "react-bootstrap";

const jobs = [
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    description: "Something pithy about this position"
  },
  {
    company: "Freelance",
    title: "Front-End Developer",
    description: "Something different"
  },
  {
    company: "Pellet Grill Pros",
    title: "Web Developer",
    description: "Something pithy about this position"
  },
  {
    company: "AAL-USA, Inc.",
    title: "Maintenance/HR Manager",
    description: "Something pithy about this position"
  }
];

export default function TabLinks() {
  const links = jobs.map((link) => {
    return(
      <Nav.Item>
        <Nav.Link eventKey={link.title}>{link.title}</Nav.Link>
      </Nav.Item>
    )
  });
  return <Nav
    id="left-tabs-example"
    defaultActiveKey="Full-Stack Developer"
    variant="pills">{links}</Nav>;
}

