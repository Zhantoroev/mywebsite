import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img  variant="top" src={props.imgPath} alt="card-img" style={{ padding: "30px"}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
      </Card.Body>
      <Button style={{ margin: "0 20% 20px 20%" }}  variant="primary" href={props.link} target="_blank">
          <CgWebsite /> &nbsp;
            Verify Badge
      </Button>
    </Card>
  );
}
export default CertificationCard;
