import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MEET <span className="blue"> SYIMYK </span> ZHANTOROEV
            </h1>
            <p className="home-about-body">
              As a seasoned DevOps Engineer, I have honed my skills and abilities over the years to become a 
              highly competent and versatile professional. I am committed to delivering secure and innovative 
              solutions that cater to the specific needs of any organization I work with. I take pride in 
              continuously improving my skills and knowledge to ensure that I provide cutting-edge solutions.
              <br />
              <br />
              Aside from my technical expertise, I excel in decision-making, teamwork, and communication. I value 
              collaboration and believe that open communication is key to successful project outcomes.
              <br />
              <br />
              During my free time, I enjoy exploring Javascript libraries and frameworks such as React.js, Express.js, 
              and Node.js to develop new products and expand my skill set.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONTACT ME</h2>
            <p>
              I welcome the opportunity to connect with like-minded individuals in the industry. 
              Whether you have a question, an opportunity to collaborate, or simply want to chat 
              about the latest trends in DevOps, feel free to reach out. I am always happy to connect. 
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:s.m.zhantoroev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
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
