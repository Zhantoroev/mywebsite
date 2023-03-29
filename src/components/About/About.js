import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import DevOpsStack from "./DevOpsStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import DevStack from "./DevStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who I Am
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong>Skills and Expertise</strong>
        </h1>

        <DevOpsStack />
        <DevStack />
      </Container>
    </Container>
  );
}

export default About;
