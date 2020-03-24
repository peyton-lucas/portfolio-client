import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import "../styles.scss";

const afghanistan =
  [
    {description: "I haven't always been a software developer. \
    In another life, I did the whole soldier-of-fortune thing in the Middle East helping out with drug-interdiction operations. \
    It was a job / life of many hats, but essentially I helped support aviation maintenance ops so birds could fly and shooters could shoot."},
    {description: "It was rarely fun, never easy and always pushed me to my limit, \
    but I learned that perseverance and the determination not to quit are the greatest ingredients to \
    succeed at anything. And I used this same attitude to become a software engineer."},
    {description: "An important thing to note about a wartime environment, is the op-tempo is usually very high. \
    Being a part of this high-tempo environment had such a huge impact on my life. I knew before I came home, it was \
    going to be very difficult to replicate that fast-paced, high-energy sense of meaning. I also knew that in order to be \
    happy, I was going to have to find something that challenged me as much as Afghanistan did. That's where coding came in, \
    and I haven't been the same since."}
  ];

export default function Journey() {
  const myJourney = afghanistan.map((journey) => {
    return <p className="left-align">{journey.description}</p>
  });
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h4>{'let my = me;'}</h4>
          <h2 id="Journey">{'{ my: journey }'}</h2>
          <br />
          <Row>
            <Col>
              { myJourney }
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  src="./Astan.jpeg"
                  rounded
                />
                <Figure.Caption>
                  Me next to some some MRAPs
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}