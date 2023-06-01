import React from "react";
import "./Projects.css"
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Recent Projects</h1>
      <div className="projects-list-container">
        <div className="projects-item">
        <a href="https://github.com/Jzridar/Breakout-game"> <img src={p1} alt="project1" /></a>
        </div>
        <div className="projects-item">
        <a href="https://coin-ranking-jzridar.onrender.com/home"><img src={p2} alt="project2" /></a>
        </div>
        <div className="projects-item">
         <a href="https://product-user-page.onrender.com/admin/products"><img src={p3} alt="project3" /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;