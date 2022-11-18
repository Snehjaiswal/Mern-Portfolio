import React, { Component } from "react";
import Card from "./Card";

class Achievements extends Component {
  render() {
    return (
      <div style={{ margin: "3.25vw 6.51vw 3.25vw 6.51vw" }} id="achievement">
        {" "}
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Achievements
        </h3>
        <Card />
      </div>
    );
  }
}

export default Achievements;
