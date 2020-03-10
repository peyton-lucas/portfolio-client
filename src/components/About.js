import React from "react";
import { Container, Figure, Row } from "react-bootstrap";
import "../styles.scss";

const about =
  [
    {description: "Hi! My name's Peyton. I'm a southern web dev\
                  who currently lives and works in Sweet Home Alabama.\
                  And yes, heard the songs and seen the movie."},
    {description: "I used to play with helicopters and machine guns in the desert,\
                  but now I just like coding, exercising and traveling."},
    {description: "Cool Yank is a nickname I picked up \
                  from my ozzy friends via travels in Sydney."}
  ];

export default function About() {
  const paragraphs = about.map((description) => {
    return <p className="left-align">{description.description}</p>
  });
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h2 id="About">{'{ about: me }'}</h2>
          <br />
          <Figure>
            <Figure.Image
              width={1024}
              height={683}
              src="./me2.jpg"
            />
            <Figure.Caption>
              Little ol' me
            </Figure.Caption>
          </Figure>
          {paragraphs}
        </Row>
      </Container>
    </div>
  );
}