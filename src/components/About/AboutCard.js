import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, my name is <span className="blue">Syimyk Zhantoroev</span> 
            , I'm from<span className="blue"> Bishkek, Kyrgyzstan. </span>
            <br />
            <br />
            As a DevOps professional, I possess a diverse set of skills that enable me 
            to be an effective team player, decision maker, and leader. I have strong 
            management, communication, and analytical abilities and I approach my work 
            with a positive outlook and an open mind.
            <br />
            <br />
            As a fast learner, I have a passion for exploring new technologies and constantly 
            expanding my knowledge base. I am always eager to contribute to the success of my 
            team and organization, and strive to bring a unique perspective to all of my projects
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
