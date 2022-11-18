import React, { Component } from "react";
import SkillsIcons from "./Icons";
import "../Resume.scss";

class Skills extends Component {
  render() {
    return (
      <div style={{ margin: "3.25vw 6.51vw 3.25vw 6.51vw" }} id="skill">
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Skills
        </h3>

        <SkillsIcons />
      </div>
    );
  }
}

export default Skills;
