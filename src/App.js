import './App.css';
import './responsive.css';

import About from './components/about';
import Contact from './components/contact';
import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {  

  function scrollTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });    
  }

  return (
    <div className="App">
      <Navbar />
      <div id='landing'>
        <Introduction />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      {
        <button id='scrollUp' onClick={scrollTop}>^</button>
      }
    </div>
  );
}

export default App;
