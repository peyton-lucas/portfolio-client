import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";

const jobs = [
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    link: "https://studistics.com",
    picture: "./studistics.png",
    description: [
      "Studistics: A livestock breeding application. \
      Plots animal growth rates on bell curve, and \
      helps farmers raise heavier, healthier animals."
    ]
  }
  // {
  //   company: "Freelance",
  //   title: "Front-End Developer",
  //   picture: "",
  //   description: [
  //     "Single page app for an orthopedic surgeon",
  //     "Chat feature to allow scheduling appts easier",
  //     "Makes surgeon more accessible to patients"
  //   ]
  // },
  // {
  //   company: "Pellet Grill Pros",
  //   title: "Web Developer",
  //   picture: "",
  //   description: [
  //     "Ecommerce store that sold pellet grills",
  //     "My first soirée into web development",
  //     "This motivated me to become a web dev"
  //   ]
  // },
  // {
  //   company: "AAL-USA",
  //   title: "Maintenance/HR Manager",
  //   picture: "",
  //   description: [
  //     "Formerly a soldier of fortune in the Middle East",
  //     "Provided maintenance support for counter-narco flight operations",
  //     "Worked with over 20 nationalities, lived on 4 of 7 continents"
  //   ]
  // }
];

// Holder photo dimensions
// holder.js/450x250

export default function Tiles() {
  const tiles = jobs.map((tile) => {
    return(
      <Container>
        <Row className="row-padding">
          <Col className="experience-center" lg={6}>
            {!tile.link ? (
              <Image
                src=""
                rounded />
            ) : (
              <Nav.Link href={tile.link} className="margin-top-25">
                <Image
                  src={tile.picture}
                  rounded />
              </Nav.Link>
            )}
          </Col>
          {!tile.link ? (
            <Col lg={6}>
              <h4>{"{ "}{tile.title}{": "}{tile.company}{" }"}</h4>
              <p>
                {tile.description}
              </p>
            </Col>
          ) : (
            <Col lg={6}>
              <h4>{"{ "}{tile.title}{": "}{tile.company}{" }"}</h4>
              <p>
                {tile.description}
              </p>
              <Button variant="dark" href={tile.link}>Read more {">"}</Button>
            </Col>
          )}
        </Row>
      </Container>
    )
  });
  return(
    <div className="left-align">
      {tiles}
      <br />
    </div>
  );
}