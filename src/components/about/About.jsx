import React from "react";
import "./about.css";
import Pic from "../../assets/Ej3.jpg";
import { FaAward } from "react-icons/fa/";
import { AiOutlineUser } from "react-icons/ai/";
import { AiOutlineFolderOpen } from "react-icons/ai/";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div >
            <img src={Pic} alt="ganyuwu" className="about-img" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>+1 Days Working</small>
            </article>

            <article className="about-card">
              <AiOutlineUser className="about-icon" />
              <h5>Clients</h5>
              <small>+2 Clients</small>
            </article>

            <article className="about-card">
              <AiOutlineFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>like 3 projects ;)</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quos
            quaerat nihil modi exercitationem corporis amet corrupti sunt ut
            deleniti culpa voluptatibus assumenda odio aperiam debitis maxime
            molestiae natus? Porro!
          </p>

          <a href="#contact" className="btn">Let's communicate</a>
        </div>
      </div>
    </section>
  );
};

export default About;
