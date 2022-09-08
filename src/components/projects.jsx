import React, { useEffect, useState } from "react";
import Item from "./project-item";
import axios from "axios";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  function scrollDown() {
    let current = window.scrollY;
    let next = window.innerHeight;
    let total = current + next;

    window.scroll({
      top: total,
      left: 0,
      behavior: "smooth",
    });
  }

  async function getProjects() {
    const response = await axios.get(
      "https://api-george-develops.herokuapp.com/api/projects"
    );
    return setProjects(response.data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <React.Fragment>
      <div id="projects-content">
        <div id="projects-title">PROJECTS</div>

        <ul id="items-wrapper">
          {projects.length < 1 ? (
            <p>No projects found.</p>
          ) : (
            projects.map((p) => (
              <Item
                key={p.name}
                name={p.name}
                description={p.description}
                github={p.github}
                url={p.url}
                imageUrl={p.imageUrl}
              />
            ))
          )}
        </ul>

        <div id="projects-btns">
          <button onClick={scrollDown}>Continue</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
