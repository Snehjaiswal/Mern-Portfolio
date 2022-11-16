import React from "react";
// import { ProjectDetails } from "./ProjectDetails";
import { Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Project.scss";
import PortfolioImg from './ProfilePhoto.png'


function Maz() {
  return (
    <div>
      <Col>
        <Row>
          <div className="project-card-details">
            <ProjectCard
              image="https://i.pinimg.com/originals/31/0c/fa/310cfac3d064ea29c2401793496f06ac.png"
              title="Portfolio HTML CSS"
              body="Simple Html Css Portfolio Project. it's My First Portfolio."
              demourl="https://snehjaiswal.github.io/My-Portfolio-code/"
              codeurl="https://github.com/Snehjaiswal/My-Portfolio-code"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image={PortfolioImg}
              title="Mern Portfoliyo"
              body="It's Animeted portfoliyo project using Mern Stack."
              demourl="https://notesflix.in"
              codeurl="https://github.com/Snehjaiswal/Mern-Portfoliyo"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image="data:image/jpeg;base64,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"
              title="Resume Builder"
              body="It is react base app and it help to create and download resume."
              demourl="https://th5t74-3000.preview.csb.app/"
              codeurl="https://github.com/Snehjaiswal/Resume-builder"
            />
          </div>
        </Row>
      </Col>
    </div>
  );
}
function urlClick(link) {
  const url = link;
  window.open(url, '_blank');
}

function ProjectCard(props) {
  return (
    <div>
      <Row>
        <Card style={{ width: "25rem" }} className="project-card">
          <Card.Img
            variant="top"
            src={props.image}
            height="300"
            width="300"
            className="project-icons"
          />
          <Card.Body>
            <Card.Title className="project-title">{props.title}</Card.Title>
            <Card.Text className="project-body">{props.body}</Card.Text>
            <p style={{ textAlign: "center", left: "0", marginTop: "10px" }}>
              <Button className="urls" onClick={() => { urlClick(props.demourl) }}> Demo </Button> <Button className="urls" onClick={() => { urlClick(props.codeurl) }}> Code </Button>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default Maz;
