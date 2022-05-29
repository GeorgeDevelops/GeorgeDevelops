import React from 'react';
import TypingEffect from 'react-typing-effect';

const Introduction = (props) => {

    function scrollDown() {
        let next = window.innerHeight;
        window.scroll({
            top: next,
            left: 0,
            behavior: 'smooth'
          });
    }

    return ( 
    <React.Fragment>
        <div id='introduction'>
            <div className='intro'>
                <span id='name'>
                    <TypingEffect
                    text={["GEORGE QUEZADA"]}
                    speed={100}
                    typingDelay={500}
                    eraseDelay={50000}
                    className="introFontSize"
                    />
                    </span> 
                <span id='stack'>Junior FullStack Developer</span>
            </div>
            <button id='landing-btn' onClick={scrollDown}>Continue</button>
        </div>
    </React.Fragment> );
}
 
export default Introduction;