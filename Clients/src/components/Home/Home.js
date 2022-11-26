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

          {/* <span class="subheading">Hey! I am </span> */}
          <h2 className="subheading"> Hey! I am</h2>

          <h2 className="myName"> Sneh Jaiswal !</h2>
          <h2>
            <Intro />
          </h2>
          <br />
          <h4 className="introduction">
          ɪ ɴᴇᴇᴅ ᴛᴏ ᴡʀɪᴛᴇ ᴍᴏʀᴇ ʟɪɴᴇꜱ ᴀʙᴏᴜᴛ ᴍʏꜱᴇʟꜰ, ʙᴜᴛ ɪ ᴄᴀɴ'ᴛ ꜰɪɢᴜʀᴇ ɪᴛ ᴏᴜᴛ ᴀᴛ ᴛʜᴇ ᴍᴏᴍᴇɴᴛ. ꜱᴏ ɪ ᴡɪʟʟ ᴊᴜꜱᴛ ᴘᴜᴛ ɪᴛ ʜᴇʀᴇ ᴀɴᴅ ᴅᴇᴄɪᴅᴇ ᴏɴ ɪᴛ ʟᴀᴛᴇʀ.
          </h4>
        <br /> <br /> <br /> <br /><br /><br /> <br />

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
