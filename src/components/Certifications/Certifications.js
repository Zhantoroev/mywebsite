import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import cka from "../../Assets/certifications/cka.png";
import ckad from "../../Assets/certifications/ckad.png";
import google from "../../Assets/certifications/google.png";
import terraform from "../../Assets/certifications/terraform.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="blue">Certificaitons</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={3} className="project-card">
                <CertificationCard
                    imgPath={google}
                    title="Google Cloud Certified Associate Cloud Engineer"
                    link="https://www.credential.net/4eb91540-00bb-436b-9121-7e522b8041e6?key=7ecb1bd2c170863826a8e91602a1c3da8965121ce06903efb9eea420fe31c6a2"
                />
            </Col>

            <Col md={3} className="project-card">
                <CertificationCard
                    imgPath={terraform}
                    title="HashiCorp Certified: Terraform Associate"
                    link="https://www.credly.com/badges/4309aaff-5679-4d27-8984-47785f30da48/public_url"
                />
            </Col>

            <Col md={3} className="project-card">
                <CertificationCard
                    imgPath={cka}
                    title="CKA: Certified Kubernetes Administrator"
                    link="https://www.credly.com/badges/33d01e59-6e88-4082-aad6-99542eaf4bdc/public_url"
                />
            </Col>

            <Col md={3} className="project-card">
                <CertificationCard
                    imgPath={ckad}
                    title="CKAD: Certified Kubernetes Application Developer"
                    link="https://www.credly.com/badges/0fe4db19-3b79-4875-9cdc-6b3d60c69e7a/public_url"
                />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
