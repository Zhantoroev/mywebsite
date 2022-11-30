import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Syimyk Zhantoroev </span>
            from <span className="blue"> Bishkek, Kyrgyzstan. </span>
            <br />
            <br />
            An open-mind person with an optimistic approach and good soft skills. 
            Team player and decision maker with good management, communication and analytical skills. 
            Fast Learner who is crazy about learning new things, technologies and constantly looking to gain knowledge. 
            Always looking for ways to bring something special to a team and company.
            <br />
            <br />

          </p>

          <p className="blue">
            "BE THE BEST VERSION OF YOURSELF!"{" "}
          </p>
          <footer className="blockquote-footer">Syimyk Zhantoroev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
