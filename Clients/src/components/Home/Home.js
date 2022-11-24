import React from "react";
import Intro from "./Intro";
import "./Home.scss";

import { useNavigate } from "react-router";

function Home() {
  const navigation = useNavigate()

  return (
    <div className="Home" id="home">
      <div className="container">
        <div className="header">

          <span class="subheading">Hey! I am </span>
          <h1 className="myName"> Sneh Jaiswal !</h1>
          <h2>
            <Intro />
          </h2>
          <br />
          <h4 className="introduction">
            Few more lines that I need to write about me, but at the moment I
            can't figure it out. So I am just gonna put it here and decide for
            it later.
          </h4>
          <h4 className="introduction">
            Few more lines that I need to write about me, but at the moment I
            can't figure it out. So I am just gonna put it here and decide for
            it later.
          </h4>
          <h4 className="introduction">
            Few more lines that I need to write about me, but at the moment I
            can't figure it out. So I am just gonna put it here and decide for
            it later.
          </h4>
          <button className="contact-me" onClick={() => {
            navigation('/contact')
          }}> Contact Me</button>
        </div>
        <div className="container">
          <div className="hero-shape custom-animation">
            <img
              src="images/dot.svg"
              alt="circle-animation"
              height="50"
              width="50"
              style={{ opacity: "0.5" }}
            />
          </div>
          <div className="image image-fluid">
            <img id="homepng"
              src="images/Homepng.svg"
              // src="images/Homepng.gif"
              // src="https://www.animatedimages.org/data/media/545/animated-child-image-0113.gif"
              alt="Masudha"
              height="350"
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
