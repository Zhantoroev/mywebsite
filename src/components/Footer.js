import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"></Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <span className="blue">Syimyk Zhantoroev</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
                <a
                  href="mailto:s.m.zhantoroev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <SiGmail />
                </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Zhantoroev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/syimyk-zhantoroev/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
