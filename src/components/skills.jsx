import React from "react";
import html from "./../images/html5.png";
import css from "./../images/css.png";
import javascript from "./../images/javascript.png";
import react from "./../images/react.png";
import git from "./../images/git.png";
import mongodb from "./../images/mongodb.png";
import node from "./../images/nodejs.png";
import sql from "./../images/sql.png";
import python from "./../images/python.png";

const Skills = (props) => {
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

  return (
    <React.Fragment>
      <div id="skills-content">
        <div id="skills-title">SKILLS</div>
        <div id="skills-items">
          <span id="html">
            <img src={html} alt="html" />{" "}
            <span className="porcentage">99%</span>{" "}
          </span>
          <span id="css">
            <img src={css} alt="html" /> <span className="porcentage">95%</span>
          </span>
          <span id="javascript">
            <img src={javascript} alt="html" />
            <span className="porcentage">95%</span>
          </span>
          <span id="sql">
            <img src={sql} alt="html" />
            <span className="porcentage">50%</span>
          </span>
          <span id="react">
            <img src={react} alt="html" />
            <span className="porcentage">90%</span>
          </span>
          <span id="node">
            <img src={node} alt="html" />{" "}
            <span className="porcentage">90%</span>
          </span>
          <span id="python">
            <img src={python} alt="python" />{" "}
            <span className="porcentage">Learning</span>
          </span>
          <span id="git">
            <img src={git} alt="html" /> <span className="porcentage">60%</span>
          </span>
          <span id="mongodb">
            <img src={mongodb} alt="html" />{" "}
            <span className="porcentage">90%</span>
          </span>
        </div>

        <div id="skills-btns">
          <button onClick={scrollDown}>Continue</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
