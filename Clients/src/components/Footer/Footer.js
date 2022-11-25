import React, { Component } from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="footer">
        {/* <img src="images/m.svg" alt="logo" height="70" weight="70" /> */}
        <h4 className="follow">Reach out to me at</h4>
        <MDBContainer
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <a
            href="https://www.linkedin.com/in/sneh-jaiswal-431165229/"
            className="social-logo"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>
          <a href="https://github.com/Snehjaiswal" className="social-logo">
            <MDBIcon fab icon="github" />
          </a>
            <a href="#" className="social-logo">
              <MDBIcon fab icon="medium-m" />
            </a>
          <a href="https://7b1y9b-3000.preview.csb.app/" className="social-logo">
            <MDBIcon fab icon="hackerrank" />
          </a>
        </MDBContainer>
        <span>
          Made ♡ by{" "}
          <a className="my-name" href="about">
            Sneh Jaiswal
          </a>
        </span>
        <Link
          id="scrollUp"
          to="top"
          smooth={true}
          style={{ position: "fixed", zIndex: "2147483647" }}
        >
          <i class="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}

export default Footer;
