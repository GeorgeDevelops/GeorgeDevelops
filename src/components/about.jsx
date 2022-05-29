import React from "react";

const About = (props) => {

  function scrollDown() {
    let current = window.scrollY;
    let next = window.innerHeight;
    let total = current + next;
    
    window.scroll({
        top: total,
        left: 0,
        behavior: 'smooth'
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
              My name is George Quezada I am a Self-Taught Junior Fullstack
              Developer from the Dominican Republic. I currently don't have any
              work experience in a web development role, however I do have
              experience working on my personal projects listed below. The
              technologies I use are React, Nodejs, HTML5, CSS3, MongoDB locally
              and on the Cloud MongoDB Atlas and I am looking forward to
              learning to work with SQL data bases and Python. I am Biligual
              with excellent and advanced communication skills in English which
              is my secondary language. I'm looking forward to contributing my
              skills and knowledge, improve them, and to learn from others.
            </p>

            <div id="about-btns">
              <button>
                <a target={'_blank'} rel="noreferrer" href="https://firebasestorage.googleapis.com/v0/b/george-develops-5ad4f.appspot.com/o/Dev-Resume.pdf?alt=media&token=e3e28480-6dc2-4792-b7da-d388748a1e28">
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
