import React from "react";
import { Button, Container, Nav, Row } from "react-bootstrap";
import "../styles.scss";

export default function Hero() {
  return(
    <div className="lander">
      <Container>
        <Row className="cta">
          <div className="content">
            <div className="content__container">
              <h3>{'const me = '}</h3>
              <h1 className="content__container__text">Peyton Lucas</h1>
              <br />
            </div>
          </div>
          <div id="#About" className="section10 demo">
            <Nav.Link><span></span>Find out more</Nav.Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}