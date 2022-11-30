import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiDatabase } from "react-icons/gi";
import Tooltip from "@mui/material/Tooltip";
import {
  SiPostman,
  SiSwagger,
  SiCss3,
  SiHtml5,
  SiDocker
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip title="Python" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <DiPython />
        </Col>
      </Tooltip>
      <Tooltip title="JavaScript" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <DiJavascript1 />
        </Col>
      </Tooltip>
      <Tooltip title="NodeJS" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <DiNodejs/>
        </Col>
      </Tooltip>
      <Tooltip title="Docker" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiDocker />
        </Col>
      </Tooltip>
      <Tooltip title="React" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <DiReact />
        </Col>
      </Tooltip>
      <Tooltip title="CSS" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiCss3 />
        </Col>
      </Tooltip>
      <Tooltip title="HTML" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiHtml5 />
        </Col>
      </Tooltip>  
      <Tooltip title="Swagger" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiSwagger />
        </Col>
      </Tooltip>
      <Tooltip title="Databases" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <GiDatabase />
        </Col>
      </Tooltip>
      <Tooltip title="Postman" placement="top">
        <Col xs={4} md={2} className="tech-icons ">
          <SiPostman />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Toolstack;
