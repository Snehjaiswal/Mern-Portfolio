import React, { Component } from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";

function Footer() {
  function changeImage() {
    var image = document.getElementById('myImage');
  if (image.src.match("https://i.postimg.cc/6QyTynzr/bulb-on.png")) {
    image.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
  } else {
    image.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
  }
  }
  return (
    <>
      <div className="Footer" id="footer">
        <h4 className="follow">Reach out to me at</h4>
        <MDBContainer
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >

          <img id="myImage" className="img11" onClick={(e) => { changeImage() }} src="https://i.postimg.cc/KjK1wL3c/bulb-off.png" width="100" height="180"/>

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

    </>
  );
}


export default Footer;
