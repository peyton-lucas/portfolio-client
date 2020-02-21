import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles.scss";

const hero = {
  h1: "Peyton Lucas",
  navText: "Find out more"
};

export default function Hero() {
  return(
    <div className="lander">
      <Container>
        <Row className="cta">
          <div className="content">
            <div className="content__container">
              <h3>{'const me = '}</h3>
              <h1 className="content__container__text">{hero.h1}</h1>
              <br />
            </div>
          </div>
          <div className="section10 demo">
            <Nav.Link>
              <span></span>
              <Link
                activeClass="active"
                to={"About"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {hero.navText}
              </Link>
            </Nav.Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}