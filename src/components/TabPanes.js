import React from "react";
import { Tab } from "react-bootstrap";

export default function TabPanes() {
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

  const tabPanes = jobs.map(tabPane => {
    return (
      <Tab.Pane eventKey={jobs.title}>
        {jobs.description}
      </Tab.Pane>
    )
  });

  return tabPanes;
}