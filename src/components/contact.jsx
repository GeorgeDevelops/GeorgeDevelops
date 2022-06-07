import React from 'react';

const Contact = (props) => {
    return ( 
    <React.Fragment>
        <div id='contact-content'>
            <div id='contact-title'>
                CONTACT
            </div>

            <form id='form' action="https://formsubmit.co/george.develops19@gmail.com" method="POST">
                <input type="email" placeholder='Email' />
                <input type="text"  placeholder='subject' />
                <textarea  placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
                <input type="submit" />

                    <input type="hidden" name="_autoresponse"
                    value="Thank you! your message has been successfully submitted and I'll be getting back to you as soon as possible."></input>

                    <input type="hidden" name="_captcha" value="false"></input>
            </form>

            <div id='social-media'>
                <ul>
                    <li><a className='instagram' href="https://www.instagram.com/george_develops/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a className='linkedin' href="https://www.linkedin.com/in/george-quezada-278ab4230/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a className='github' href="https://github.com/GeorgeDevelops" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>

            <p id="rights">
            All rights reserved &copy; George Quezada.
            </p>
        </div>
    </React.Fragment> );
}
 
export default Contact;