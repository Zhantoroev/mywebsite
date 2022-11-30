import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiMeshNetwork } from 'react-icons/gi';
import Tooltip from "@mui/material/Tooltip";
import {
  DiGit,
} from "react-icons/di";
import {
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiAmazonaws,
  SiGooglecloud,
  SiGitlab,
  SiGithubactions,
  SiElasticsearch,
  SiGrafana,
  SiPrometheus,
  SiLinux,
  SiApachekafka,
  SiGnubash,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title="Amazon Web Services" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiAmazonaws />
        </Col>
      </Tooltip>

      <Tooltip title="Google Cloud Platform" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecloud />
        </Col>
      </Tooltip>
      
      <Tooltip title="Terraform" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiTerraform />
        </Col>
      </Tooltip>
      
      <Tooltip title="Kubernetes" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
        </Col>
      </Tooltip>
      
      <Tooltip title="Helm" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiHelm />
        </Col>
      </Tooltip>
      
      <Tooltip title="GitLab CI" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiGitlab />
        </Col>
      </Tooltip>
      
      <Tooltip title="GitHub Actions" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiGithubactions />
        </Col>
      </Tooltip>
      
      <Tooltip title="Apache Kafka" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiApachekafka />
        </Col>
      </Tooltip>
      
      <Tooltip title="ElasticSearch" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiElasticsearch />
        </Col>
      </Tooltip>
      
      <Tooltip title="Grafana" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiGrafana />
        </Col>
      </Tooltip>
      
      <Tooltip title="Prometheus" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiPrometheus />
        </Col>
      </Tooltip>
      
      <Tooltip title="Linux" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
      </Tooltip>
      
      <Tooltip title="Bash Scripting" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <SiGnubash />
        </Col>
      </Tooltip>
      
      <Tooltip title="Network" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <GiMeshNetwork />
        </Col>
      </Tooltip>
    
      <Tooltip title="Git" placement="top">
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </Tooltip>
    
    </Row>
  );
}

export default Techstack;
