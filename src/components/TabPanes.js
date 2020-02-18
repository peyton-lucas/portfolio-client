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
    description: "I'm always on the lookout for the next great opportunity,\n" +
      "            whether that's a full-time engagement, long-term contract.\n" +
      "            If you're interested in hiring me, working with me or just\n" +
      "            want to know more - drop me a line via email. I'd love to\n" +
      "            hear from you!"
  }
];

export default function TabPanes() {
  const panes = jobs.map((pane) => {
    return(
      <Tab.Pane eventKey={pane.title}>
        {pane.description}
      </Tab.Pane>
    )
  });
  return <Tab.Content className="left-align">{panes}</Tab.Content>;
}