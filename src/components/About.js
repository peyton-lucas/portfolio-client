import React from "react";
import { Container, Figure, Row } from "react-bootstrap";

export default function About() {
  return(
    <div id="About">
      <Container>
        <Row className="cta">
          <h2>{'{ about: me }'}</h2>
          <br />
          <p>
            Hi! My name's Peyton. I'm a southern web dev
            who currently lives and works in Sweet Home Alabama.
            And yes, I've heard all the songs and seen the movie.
          </p>
          <p>
            Formerly a solder of fortune via travels in Afghanistan,
            I worked in the very high op-tempo environment of a
            combat zone. It taught me that I was always going to need
            to be challenged on a daily basis to be happy. That's why
            I've picked software as my now career of choice.
          </p>
          <p>
            When I'm not working on an algorithm or working a new project,
            you kind find me swinging a kettlebell, scouting a new hole in
            the wall or enjoying the great outdoors.
          </p>
        </Row>
      </Container>
    </div>
  );
}