import React from "react";
import "./Dashboard.css";

import cv from "../../asset/CV-Michal-Weclawik.pdf";

const Dashboard = () => {
  return (
    <section className="dasboard">
      <h1>Hey, I`m Michal !</h1>
      <h3>I build web applications.</h3>
      <p>
        Junior Software Developer - based in Bristol, with mechanical
        engineering experience.
      </p>

      <div className="links">
        <a href="https://www.linkedin.com/in/michal-weclawik/" target="__blank">
          LinkedIn
        </a>
        <a href="https://github.com/michalweclawik" target="__blank">
          Github
        </a>
        <a href={cv} download="Michal  CV">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Dashboard;
