import React from "react";
import { Col, Row, Tab } from "react-bootstrap";
import TabLinks from "./TabLinks";
import TabPanes from "./TabPanes";

export default function TabsContainer() {
  return(
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}></Col>
        <Col sm={3}>
          <TabLinks />
        </Col>
        <Col sm={5}>
          <TabPanes />
        </Col>
      </Row>
    </Tab.Container>
  );
}