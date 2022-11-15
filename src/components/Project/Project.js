import React, { Component } from "react";
import Maz from "./ProjectCard";

class ProjectWork extends Component {
  render() {
    return (
      <div className="Project" id="projects">
        {" "}
        <h1 className="about-header" style={{ textAlign: "center" }}>
          Projects
        </h1>
        <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
        <Maz />
      </div>
    );
  }
}

export default ProjectWork;
