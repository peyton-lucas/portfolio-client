import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import TabLinks from "./TabLinks";
import TabPanes from "./TabPanes";

export default function TabContainer() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <TabLinks />
    </Tabs>
  );
}