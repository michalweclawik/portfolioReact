import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();

  const currentProject = projects.find((project) => project.id == id);

  return (
    <div className="project-details">
      <Link to="/portfolioReact/projects/">X</Link>
      <img src={currentProject.imageURL} alt="" />
      <h3>{currentProject.title}</h3>
      <p>{currentProject.description}</p>
      <div className="links">
        <a href={currentProject.linkToGit} target="__blank">
          GIT
        </a>
        <a href={currentProject.linkToApp} target="__blank">
          Go live
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
