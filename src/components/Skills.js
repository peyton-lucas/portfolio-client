import React from "react";
import { Container, Row } from "react-bootstrap";
import SkillSets from "./SkillSets";
import "../styles.scss";

export default function Skills() {
  return(
    <div>
      <Container className="lander">
        <Row className="cta">
          <h2 id="Skills">{'{ my: skills }'}</h2>
          <br />
          <SkillSets />
        </Row>
      </Container>
    </div>
  );
}