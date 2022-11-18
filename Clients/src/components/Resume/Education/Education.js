import React, { Component } from "react";
import Cards from "./Card";

class Education extends Component {
  render() {
    return (
      <div
        className="edu"
        style={{ margin: "3.25vw 6.51vw 3.25vw 6.51vw" }}
        id="education"
      >
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Education
        </h3>
        <Cards />
      </div>
    );
  }
}
export default Education;
