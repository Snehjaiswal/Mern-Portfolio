import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { ServiceItems } from "./ServiceItems";
import "./ServiceCard.css";

class Cards extends Component {
  render() {
    return (
      <div className="card-row">
        {ServiceItems.map((item, index) => {
          return (
            <div>
              <Card
                style={{ width: "20rem" }}
                key={index}
                className="services-card"
              >
                <div style={{paddingLeft : "35%", paddingRight: "35%"}}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  height="35"
                  width="35"
                  className="service-icons"
                />
                </div>
                <Card.Body>
                  <Card.Title className="service-title">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="service-body">{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
