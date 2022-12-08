import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I assume that I have developed a broad range of skills and abilities throughout the years 
              that make me a <b className="blue">skilled, competent, professional</b> and <b className="blue"> flexible </b> DevOps Engineer.
              <br />
              <br />
              Wherever I end up working, I constantly keep in mind that I can add value to the organization 
              by delivering secure and cutting-edge solutions depending on the demands of the business. 
              I'm enthusiastic about developing professionally. 
              Including my great technical background, I also thrive at decision-making, teamwork, and communication.
              <br />
              <br />
              In my spare time, I like to create products using Node.js, with Modern Javascript Libraries and frameworks like React.js and Express.js. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONTACT ME</h2>
            <p>
              Feel free to <span className="blue">connect </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zhantoroev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syimyk-zhantoroev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
