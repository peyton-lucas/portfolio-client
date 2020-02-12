import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Skills() {
  return(
    <div id="Experience">
      <Container>
        <Row className="cta">
          <h2>{'{ my: skills }'}</h2>
          <br />
        {/*
         Languages: JavaScript, Python, HTML, CSS, SQL/NoSQL
         Libraries & Frameworks: ReactJS, ReduxJS, NodeJS, React Router, SASS, Bootstrap, NumPy, Pandas, Flask
         AWS: Amplify, Cognito, DynamoDB Lambda, S3
         Tools: Git, Linux, Apache Server, Bash, Jupyter NoteBook, Serverless
         */}
        </Row>
      </Container>
    </div>
  );
}