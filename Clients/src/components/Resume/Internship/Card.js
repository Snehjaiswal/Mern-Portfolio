import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { EducationDetails } from "./Details";
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
        {EducationDetails.map((item, index) => {
          return (
            <Col className="resume-container">
              <Row>
                <h6
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    fontFamily: "Roboto"
                  }}
                  className="achievement-year"
                >
                  {item.duration}
                </h6>
              </Row>
              <Row>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Poppins"
                  }}
                  className="achievement-course"
                >
                  {item.job}
                </h4>
              </Row>
              <Row>
                <a href={item.link} style={{ textDecoration: 'none', color:'#000000' }} >
                  <span
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      opacity: "0.8",
                      fontWeight: "400",
                      lineHeight: "1.625em"
                    }}
                    className="achievement-college"
                  >
                    {item.company}
                  </span>
                </a>
              </Row>

              <Row>
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    opacity: "0.8",
                    fontWeight: "400",
                    lineHeight: "1.625em"
                  }}
                  className="achievement-desc"
                >
                  {item.desc}
                </span>
              </Row>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Cards;
