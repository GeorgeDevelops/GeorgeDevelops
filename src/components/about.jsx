import React from "react";

const About = (props) => {
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
      <div id="about">
        <div id="about-content">
          <div id="photoContainer">
            <div id="photo"></div>
          </div>
          <div id="description">
            <span>About</span>
            <p>
              I'm an enthusiastic, responsible and hard working Software
              Development person with 2 years of experience in the Web
              Development area. Being worked on different projects helped me
              adopt to the changes quickly. I am able to work well both, in a
              team environment as well as using own initiative. I am able to
              work well under pressure and adhere to strict deadlines.
            </p>

            <div id="about-btns">
              <button>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://firebasestorage.googleapis.com/v0/b/george-develops-5ad4f.appspot.com/o/Resume.pdf?alt=media&token=5c398193-a677-4d8a-9000-6f5a26ee11a5"
                >
                  Resume
                </a>
              </button>
              <button onClick={scrollDown}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
