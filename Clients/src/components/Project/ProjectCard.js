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
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEm__-topnVFiu3DRzBD2Zl6qHxrBVQkxCSg&usqp=CAU'
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
