import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles.scss";

const contact =
  {
    description: "I'm always on the lookout for the next great opportunity,\n" +
      "            whether that's a full-time engagement, long-term contract.\n" +
      "            If you're interested in hiring me, working with me or just\n" +
      "            want to know more - drop me a line via email. I'd love to\n" +
      "            hear from you!"
  };

export default function Contact() {
  return(
    <div id="Contact">
      <Container className="lander">
        <Row className="cta">
          <h2>{'{ contact: me }'}</h2>
          <br />
          <p className="left-align">{contact.description}</p>
        </Row>
      </Container>
    </div>
  );
}