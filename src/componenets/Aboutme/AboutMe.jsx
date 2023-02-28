import React from "react";
import "./AboutMe.css";
import myself from "../../asset/me.jpg";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="description-content">
        <div className="description">
          <h2>About me</h2>
          <div className="description-details">
            <h5>
              The passion I have for solving problems and learning new things
              drives me to become a software developer.
            </h5>
            <p>
              Being selected to nology 12 weeks full stack course I gained
              hands-on experience with multiple programming languages,
              frameworks and tools including: HTML, SCSS, JavaScript, React,
              Git, Java and Spring.
            </p>
            <p>
              After bootcamp , I have decided to learn more about REACT,
              TypeScript and Firebase and I took additional courses to
              extinguish the burning desire to learn.
            </p>
            <h5>Why programming?</h5>
            <p>
              I aimed to move into a fast-paced industry so I could be part of a
              team that is constantly learning and solving problems.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={myself} alt="Myself" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
