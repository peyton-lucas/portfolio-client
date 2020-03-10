import React from "react";
import { Container, Row } from "react-bootstrap";
import Tiles from "./Tiles";
import "../styles.scss";

export default function Projects() {
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h2 id="Projects">{'{ my: projects }'}</h2>
          <br />
          <Tiles />
        </Row>
      </Container>
    </div>
  );
}