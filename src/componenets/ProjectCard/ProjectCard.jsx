import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="project-content">
        <img src={project.imageURL} alt="" />
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
      </div>
      <Link to={`/portfolioReact/projects/${project.id}`}>More info...</Link>

      <div className="tags">
        {project.category.map((cat) => (
          <tag key={cat.index}>{cat}</tag>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
