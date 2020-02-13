import React from "react";
import { Tab } from "react-bootstrap";

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

export default function TabPanes() {
  const tabPanes = jobs.map(tabPane => {
    return (
      <Tab.Pane eventKey={tabPane.title}>
        {tabPane.description}
      </Tab.Pane>
    )
  });
  return tabPanes;
}