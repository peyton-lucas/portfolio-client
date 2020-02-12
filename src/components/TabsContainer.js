import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import TabLinks from "./TabLinks";
import TabPanes from "./TabPanes";

export default function TabContainer() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <TabLinks  />
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <TabPanes />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}