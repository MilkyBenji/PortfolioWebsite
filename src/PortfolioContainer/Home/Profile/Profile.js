import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Developer", "UX/ID Designer", "AI Enthusiast"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/benjamin.seng.3/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/benjaminn.wx/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/benjamin-seng-412b2b217/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Benjamin</span>
            </span>
          </div>
          {/* Typewriter Effect Below Icons */}
          <div>
            <h1 className="typewriter-text">
              <span style={{ fontWeight: "bold", color: "#0273D9" }}>
                {typeEffect}
              </span>
              <span className="text-xl ml-2"> {}</span>
            </h1>
          </div>
          <span className="profile-role-tagline">
            Driven by AI, machine learning, and computer engineering to create
            tomorrow’s tech.
          </span>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a
              href="Benjamin Seng Resume.pdf"
              download="Benjamin Seng Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
