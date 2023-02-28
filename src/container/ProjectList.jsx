import React from "react";

import "./ProjectList.css";
import ProjectCard from "../componenets/ProjectCard/ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectList">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
