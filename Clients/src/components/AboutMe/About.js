import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";
import profilePhoto from '../AboutMe/ProfilePhoto.png'

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              // src="https://i.pinimg.com/originals/31/0c/fa/310cfac3d064ea29c2401793496f06ac.png"
              src={profilePhoto}
              alt="Masudha"
              height="300"
              width="300"
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
              I’m a FullStack Developer. I have a passion for writing clean and
              modular code. I am also keen of maintaining beautiful,
              interactive, minimalistic, responsive and user-friendly UI.
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
