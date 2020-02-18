import React from "react";
import { Container, Row } from "react-bootstrap";
import TabLinks from "./TabLinks";
import TabsContainer from "./TabsContainer";
import "../styles.scss";

export default function Experience() {
  return(
    <div id="Experience">
      <Container className="lander">
        <Row className="cta">
          <h4>{'let my = me;'}</h4>
          <h2>{'{ my: experience }'}</h2>
          <br />
          {/*<TabLinks />*/}
          <TabsContainer />
        </Row>
      </Container>
    </div>
  );
}