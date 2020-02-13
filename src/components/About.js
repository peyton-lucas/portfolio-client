import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import "../styles.scss";

const about =
  {
    p1: "Hi! My name's Peyton. I'm a southern web dev\n" +
      "            who currently lives and works in Sweet Home Alabama.\n" +
      "            And yes, I've heard all the songs and seen the movie.",
    p2: "Formerly a solder of fortune via travels in Afghanistan,\n" +
      "            I worked in the very high op-tempo environment of a\n" +
      "            combat zone. It taught me that I was always going to need\n" +
      "            to be challenged on a daily basis to be happy. That's why\n" +
      "            I've picked software as my now career of choice.",
    p3: "When I'm not working on an algorithm or working a new project,\n" +
      "            you kind find me swinging a kettlebell, scouting a new hole in\n" +
      "            the wall or enjoying the great outdoors."
  };

export default function About() {
  return(
    <div id="About">
      <Container className="lander">
        <Row className="cta">
          <h2>{'{ about: me }'}</h2>
          <br />
          <Col sm={6}>
            <p className="left-align">{about.p1}</p>
            <p className="left-align">{about.p2}</p>
            <p className="left-align">{about.p3}</p>
          </Col>
          <Col sm={6}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
              />
              <Figure.Caption>
                Little ol' me
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}