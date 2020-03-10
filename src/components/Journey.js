import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import "../styles.scss";

const afghanistan =
  [
    {description: "A quick note on my background, my journey to  \
    an aviation maintenance contract in Afghanistan that supported counter narco-terrorism operations\
    against the Taliban by the Drug Enforcement Administration (DEA)."}
  ];

export default function Journey() {
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h4>{'let my = me;'}</h4>
          <h2 id="Journey">{'{ my: journey }'}</h2>
          <br />

        </Row>
      </Container>
    </div>
  );
}