import React from "react";
import { Col } from "react-bootstrap";

const skillSets = [
  {
    title: "Languages",
    description: ["JavaScript", "Python", "HTML", "CSS", "SQL/NoSQL"]
  },
  {
    title: "Libraries & Frameworks",
    description: ["ReactJS", "ReduxJS", "NodeJS", "React Router", "SASS", "Bootstrap", "NumPy", "Pandas", "Flask"]
  },
  {
    title: "AWS",
    description: ["Amplify", "Cognito", "DynamoDB", "Lambda", "S3"]
  },
  {
    title: "Tools",
    description: ["Git", "Linux", "Apache Server", "Bash", "Jupyter NoteBook", "Serverless"]
  }
];

export default function SkillSets() {
  const mappedSkills = skillSets.map((skill) => {
    return(
      <Col>
        <h4>{skill.title}</h4>
        <p>{skill.description + " "}</p>
      </Col>
    );
  });
  return mappedSkills;
}