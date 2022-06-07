import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
    const [width, setWidth] = useState(window.outerWidth);
    const [visible, setVisible] = useState(null);

    function scrollTo({currentTarget: section}){
        if (section.value === 1){
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        } else if (section.value === 2){
            window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
        } else if (section.value === 3){
            window.scroll({
                top: window.innerHeight * 2,
                left: 0,
                behavior: 'smooth'
              });
        } else if (section.value === 4){
            window.scroll({
                top: window.innerHeight * 3,
                left: 0,
                behavior: 'smooth'
              });
        } else if (section.value === 5){
            window.scroll({
                top: window.innerHeight * 4,
                left: 0,
                behavior: 'smooth'
              });
        }
        setVisible(null);
    }

    function openMenu(){
        if(visible) return setVisible(null);
        return setVisible(true);
    }

    useEffect(() => {
        setWidth(window.outerWidth);
    }, [window.outerWidth]);

    return ( 
    <React.Fragment>
        <nav id='navbar'>
            <div>
                <span onClick={ () => window.location = '/'}>GeorgeDevelops</span>
            </div>
       
                <FontAwesomeIcon onClick={ openMenu } id='menuIcon' icon="fa-solid fa-bars" /> 

                {
                    <ul style={
                        {display: width <= 900 && visible ? 'block' : 'none'}
                    }>
                    <li onClick={scrollTo} value="1">Home</li>
                    <li onClick={scrollTo} value="2">About</li>
                    <li onClick={scrollTo} value="3">Skills</li>
                    <li onClick={scrollTo} value="4">Projects</li>
                    <li onClick={scrollTo} value="5">Contact</li>
                    </ul>
                }

                {
                    width > 900 && <ul>
                    <li onClick={scrollTo} value="1">Home</li>
                    <li onClick={scrollTo} value="2">About</li>
                    <li onClick={scrollTo} value="3">Skills</li>
                    <li onClick={scrollTo} value="4">Projects</li>
                    <li onClick={scrollTo} value="5">Contact</li>
                    </ul>
                }
        </nav>
    </React.Fragment> );
}
 
export default Navbar;