import React from "react";
import { Container, Row } from "react-bootstrap";
import Tiles from "./Tiles";
import "../styles.scss";

export default function Experience() {
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h4 id="Experience">{'let my = me;'}</h4>
          <h2>{'{ my: experience }'}</h2>
          <br />
          <Tiles />
        </Row>
      </Container>
    </div>
  );
}