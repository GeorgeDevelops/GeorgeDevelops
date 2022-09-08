import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = (props) => {
  return (
    <React.Fragment>
      <div id="contact-content">
        <div id="contact-title">CONTACT</div>

        <form
          id="form"
          action="https://formsubmit.co/george.develops19@gmail.com"
          method="POST"
        >
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="subject" required />
          <textarea
            placeholder="Message"
            name="message"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
          <input type="submit" placeholder="Submit" />

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you! your message has been successfully submitted and I'll be getting back to you as soon as possible."
          ></input>

          <input type="hidden" name="_captcha" value="false"></input>
        </form>

        <div id="social-media">
          <ul>
            <li>
              <a
                className="instagram"
                href="https://www.instagram.com/george_develops/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/george-quezada-278ab4230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/GeorgeDevelops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>

        <p id="rights">All rights reserved &copy; George Quezada.</p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
