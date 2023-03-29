import React from "react";
import AppleStore from "../../assets/AppleStore";
import GooglePlay from "../../assets/GooglePlay";
import ProjectsPhone1 from "../../assets/ProjectsPhone1";
import ProjectsPhone2 from "../../assets/ProjectsPhone2";
import "./Projects.css";

function Projects() {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsContent">
        <h2>
          Manage your projects <br />
          from your mobile
        </h2>
        <p>
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procastinating. Stay on track and complete
          on time!
        </p>

        <p>Get The App</p>
        <span className="GetApp">
          <GooglePlay />
          <div style={{ marginLeft: 12 }}>
            <AppleStore />
          </div>
        </span>
      </div>
      <div className="ProjectImages">
        <div>
          <ProjectsPhone1 />
        </div>
        <div>
          <ProjectsPhone2 />
        </div>
      </div>
    </div>
  );
}

export default Projects;
