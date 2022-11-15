import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { WebIcons } from "./WebDetails";
import "../Resume.scss";

class SkillsIcons extends Component {
  render() {
    return (
      <div>
        <Col>
          Web Technologies
          <Row>
            {WebIcons.map((item, index) => {
              return (
                <div className="skills-card">
                  <span className="icons" key={index}>
                    <img
                      src={item.imgurl}
                      alt={item.alt}
                      height="40"
                      width="40"
                      className="icon"
                    />
                    {"   "}
                    {item.name}
                  </span>
                </div>
              );
            })}
          </Row>
        </Col>
      </div>
    );
  }
}

export default SkillsIcons;
