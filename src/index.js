import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import App from './App';



library.add(faBars, faInstagram, faLinkedin, faGithub);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);