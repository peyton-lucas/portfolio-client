import React from "react";
import { Nav } from "react-bootstrap";

export default function TabLinks() {
  const jobs = [
    {
      company: "Freelance",
      title: "Full-Stack Developer",
      description: "Something pithy about this position"
    },
    {
      company: "Freelance",
      title: "Front-End Developer",
      description: "Something pithy about this position"
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

  const tabLinks = jobs.map(tab => {
    return (
      <Nav.Item>
        <Nav.Link eventKey={jobs.title}>{jobs.title}</Nav.Link>
      </Nav.Item>
    )
  });

  return tabLinks;
}

