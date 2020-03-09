import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";

const jobs = [
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    link: "https://studistics.com",
    picture: "./studistics.png",
    description: "I built a livestock breeding application that takes in livestock data, \n" +
      "          mashes it through a linear interpolation algorithm, and then plots their \n" +
      "          growth rates to help farmers raise heavier, healthier animals \n"
  },
  {
    company: "Freelance",
    title: "Front-End Developer",
    description: "I built a web app for an orthopedic surgeon. It was setup as a single page lander \n" +
      "          with a chat feature linked to his phone to help patients find him and contact him \n" +
      "          more easily. This was where I first got introduced to JavaScript, and it eventually \n" +
      "          motivated me to pursue software engineering as a career. Loops and logic statements \n" +
      "          were in my future.\n"
  },
  {
    company: "Pellet Grill Pros",
    title: "Web Developer",
    description: "I built and helped manage an ecommerce site. This is where I caught the bug for web development.\n" +
      "          I got into markup language heaven, messing around with HTML and CSS. I spent a lot of time honing \n" +
      "          an eye for design and really grounding my passion for coding.\n"
  },
  {
    company: "AAL-USA",
    title: "Maintenance/HR Manager",
    description: "In another life, it was hot, dusty and bloody. I was a civilian contractor attached to\n" +
      "          an aviation maintenance contract in Afghanistan. The mission: help the DEA cut the flow of opioids \n" +
      "          in the Afghan theatre to punch the Taliban's pocket book. A lot of life experience crammed into one year.\n" +
      "           If you like to know more, drop me a line.\n"
  }
];

// Holder photo dimensions
// holder.js/450x250

export default function Tiles() {
  const tiles = jobs.map((tile) => {
    return(
      <Container>
        <Row className="row-padding">
          <Col className="expereince-center" lg={6}>
            {!tile.link ? (
              <Image
                src=""
                rounded />
            ) : (
              <Nav.Link href={tile.link}>
                <Image
                  src={tile.picture}
                  rounded />
              </Nav.Link>
            )}
          </Col>
          {!tile.link ? (
            <Col lg={6}>
              <h4>{"{ "}{tile.title}{": "}{tile.company}{" }"}</h4>
              <p>
                {tile.description}
              </p>
            </Col>
          ) : (
            <Col lg={6}>
              <h4>{"{ "}{tile.title}{": "}{tile.company}{" }"}</h4>
              <p>
                {tile.description}
              </p>
              <Button variant="dark" href={tile.link}>Read more {">"}</Button>
            </Col>
          )}
        </Row>
      </Container>
    )
  });
  return(
    <div className="left-align">
      {tiles}
      <br />
    </div>
  );
}