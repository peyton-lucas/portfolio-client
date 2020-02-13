import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles.scss";

export default function Contact() {
  return(
    <div id="Contact">
      <Container>
        <Row className="cta">
          <h2>{'{ contact: me }'}</h2>
          <br />
          <p>
            I'm always on the lookout for the next great opportunity,
            whether that's a full-time engagement, long-term contract.
            If you're interested in hiring me, working with me or just
            want to know more - drop me a line via email. I'd love to
            hear from you!
          </p>
        </Row>
      </Container>
    </div>
  );
}