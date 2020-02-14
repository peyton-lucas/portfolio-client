import React from "react";
import { Tab, Tabs } from "react-bootstrap";

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
    description: "Somethig pithy about this position"
  }
];

export default function TabLinks() {
  const tabs = jobs.map((tab) => {
    return(
      <Tab eventKey={tab.title} title={tab.title}>
        {tab.description}
      </Tab>
    )
  });
  return <Tabs defaultActiveKey="Full-Stack Developer" id="uncontrolled-tab-example">{tabs}</Tabs>;
}

