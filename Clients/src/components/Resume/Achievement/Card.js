import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AchievementDetails } from "./Details";
import "../Resume.scss";

class Cards extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hover: false
  //   };
  // }
  // toggleHover() {
  //   const inverseHover = !this.state.hover;
  //   this.setState({ hover: inverseHover });
  // }

  render() {
    // var linkStyle;
    // if (this.state.hover) {
    //   linkStyle = {
    //     backgroundColor: "#90acd1",
    //     cursor: "pointer",
    //     color: "#fff"
    //   };
    // } else {
    //   linkStyle = { backgroundColor: "#f9f9ff" };
    // }

    return (
      <div>
        {AchievementDetails.map((item, index) => {
          return (
            // style={linkStyle}
            // onMouseEnter={() => {
            //   this.toggleHover();
            // }}
            // onMouseLeave={() => {
            //   this.toggleHover();
            // }}

            <Col className="resume-container">
              <Row>
                <h6 className="achievement-year">{item.year}</h6>
              </Row>
              <Row>
                <h4 className="achievement-course">{item.course}</h4>
              </Row>
              <Row>
                <span className="achievement-college">{item.college}</span>
              </Row>

              <Row>
                <span className="achievement-desc">{item.desc}</span>
              </Row>
              <Row>
              <a onClick={()=>{  window.open(item.url);}}>View</a>
              </Row>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Cards;
