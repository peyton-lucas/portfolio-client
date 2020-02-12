import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Tabs from "./Tabs";

export default function TabContainer() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Tabs />
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tabs />
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}