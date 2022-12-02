import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectImg from "../../Assets/Projects/projectImg.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Protect Application from Common Web Threats"
              description="Implementing WAF ACL on top of ALB and CloudFront with IPv4 and IPv6 whitelist IP sets via cloud formation to prevent unauthorized access and protect against common threats like DDOS."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Migration from AWS to GCP"
              description="Migrated Kubernetes applications from AWS EKS to GCP GKE. Helm Charts were used to easily manage K8s apps on GKE and other GCP services like Google Secret Manager which stores credentials for Red Hat Quay images registry."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Terraform Automation Software"
              description="Developed a software solution (website) for Terraform automation. Which mainly focused on automation of VM instances like changing, creation and  deletion"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Kubernetes GitOps"
              description="Implemented GitOps approach for managing Kubernetes applications with ArgoCD"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Python/Bash automation"
              description="Automated repeating tasks, reduced time of DevOps life cycle and improved efficiency with writing custom bash and python scripts."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="CI/CD Pipeline"
              description="Created CI/CD pipelines to catch errors and bugs in early stage of development and automated build, test and deploying applications."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Write documentation"
              description="Wrote confluence page documentations on existing infrastructure, running app specification/configurations, and usage of a particular tool in a company. "
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Monolithic to microservices migration"
              description="Dockerized applications to break up monolithic app into microservices. Created CI/CD pipeline to build, test and push docker images to ECR. Deployed and managed these  container on AWS ECS"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Terraform Modules"
              description="Refactored Monolithic Terraform Configuration"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="WebApp deployment on AWS"
              description="Implemented Github Actions pipeline to push source code changes to S3. Deployed static websites to S3 with CloudFront enabled and configured Route53."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Monitoring Implementation"
              description="Implementing monitoring tools like Grafana/Prometheus, DataDog, and Dashboards like Lens and Redash."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Docker container management"
              description="Implemented containerization of applications with Docker. Build and maintained Docker containers wit Github Actions"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Implementing IaC via Terraform"
              description="Created clean and reusable terraform module for repeated resources to make infrastructure more manageable. Updated all environments, including production environment with zero downtime."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Serverless application"
              description="Created an Application with an API and Deploy it to AWS Lambda."
              link=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImg}
              title="Monolithic to microservices migration"
              description=""
              link=""
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
