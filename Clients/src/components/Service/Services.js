import React, { Component } from "react";
import Card from "./Card.js";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="Services" id="services">
        <div class="container">
          <div className="service-header">
            <span className="service-header">MY SERVICES</span>
            <h1>
              <b className="service-heading">I can make these awesome things</b>
            </h1>
            <span>
              I understand what your business means to you, your requirements
              considering trends.
            </span>
          </div>
          <div className="cards">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
