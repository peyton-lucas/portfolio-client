import React from "react";
import { Tab } from "react-bootstrap";

const jobs = [
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    description: "I was hired by a customer to build a livestock breeding application that was\n" +
      "          eventually called Studistics. It uses a linear interpolation algorithm to curve fit an\n" +
      "          animal’s weight data and project that animal’s growth rates over time. This allows\n" +
      "          farmers to make data-driven decisions about which bloodlines to cultivate and\n" +
      "          which bloodlines to cull.\n" +
      "\n" +
      "          My time working on Studistics has helped me to further refine my skills in ReactJS\n" +
      "          web development and deepen my knowledge of the AWS suite. It also has given me\n" +
      "          a real passion to learn and implement design patterns early and often, as well as,\n" +
      "          becoming competent in systems design."
  },
  {
    company: "Freelance",
    title: "Front-End Developer",
    description: "I built a web app for an orthopedic surgeon. I got very deep into UI/UX design via\n" +
      "          HTML / CSS, and tjhis was my first exposure to the wonderful defacto language of\n" +
      "          the web known as JavaScript. I started competing for page rank status and SEO\n" +
      "          keywords, but this was the precursor to my real jump into the world of coding.\n" +
      "          Loops, if statements and logic began to creep into my world, as I began to realize\n" +
      "          what I really needed to focus on to succeed in this industry."
  },
  {
    company: "Pellet Grill Pros",
    title: "Web Developer",
    description: "So there I was, fresh home from Afghanistan and sat on a pile of money, and I had to\n" +
      "          decide what I wanted to do with my life. After taking a 3-month weekend and a deep\n" +
      "          chat with my brother, I decided web development was the path for me. I got into markup language heaven,\n" +
      "          messing around with HTML and CSS. I loved trying to\n" +
      "          anticipate what customers wanted to see, and what might increase sales. I found it\n" +
      "          very fulfilling to put in a days work and actually see the product come alive. This\n" +
      "          was where I caught the bug for web dev. I wasn’t intentional, it just happened."
  },
  {
    company: "AAL-USA, Inc.",
    title: "Maintenance/HR Manager",
    description: "In another life, it was hot, dusty and bloody. I was a civilian contractor attached to\n" +
      "          an aviation maintenance contract in Afghanistan that supported flight operations\n" +
      "          for Mi-17 helicopters used by the Afghan National Air Force (ANAF). I spent a little\n" +
      "          over 300 days in country, and in that time, I worked with over 20 nationalities, many\n" +
      "          of them from NATO, and had responsibilities that ranged from maintenance\n" +
      "          management all the way to interfacing with counter-intelligence.\n" +
      "\n" +
      "\n" +
      "          It was a crazy time in life and I wouldn’t wish it on my worst enemy, but I wouldn’t\n" +
      "          trade it for the world. I think I learned more about life and people in that one year\n" +
      "          than I have in the rest of my life combined. It has most definitely shaped the man I\n" +
      "          am today, and it is what taught me the value of grit and resolve, which I’ve used\n" +
      "          extensively throughout my coding journey."
  }
];

export default function TabPanes() {
  const panes = jobs.map((pane) => {
    return(
      <Tab.Pane eventKey={pane.title}>
        <h5>{pane.company}</h5>
        {pane.description}
        <p>

        </p>
      </Tab.Pane>
    )
  });
  return <Tab.Content className="left-align">{panes}</Tab.Content>;
}