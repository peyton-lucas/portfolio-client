import React from "react";
import { Container, Row } from "react-bootstrap";
import TabsContainer from "./TabsContainer";

export default function Experience() {
  return(
    <div id="Experience">
      <Container>
        <Row className="cta">
          <h4>{'let my = me;'}</h4>
          <h2>{'{ my: experience }'}</h2>
          <br />
          <TabsContainer />
        </Row>
      </Container>
    </div>
  );
}