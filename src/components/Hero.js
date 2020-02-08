import React from "react";
import { Button, Container, Nav, Row } from "react-bootstrap";
import "../styles.scss";

export default function Hero() {
  return(
    <div className="lander">
      <Container>
        <Row className="cta">
          <h1>Peyton <span className="outline">Lucas</span></h1>
          <br />
          {/*<Button className="button">*/}
          {/*    Get to know me*/}
          {/*</Button>*/}
          <div className="section10 demo">
            <Nav.Link><span></span>Find out more</Nav.Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}