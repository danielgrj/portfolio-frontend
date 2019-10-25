import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './projects.css';

export default function Projects() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    document.querySelector('#navbar').classList.add('navbar-projects');

    return () => {
      document.querySelector('#navbar').classList.remove('navbar-projects');
    }
  }, []);

  return (
    <CSSTransition in={inProp} timeout={250} classNames="section">
      <div className="section-container projects">
        <a className="project-container" href="https://danielgrj.github.io/ironEmblem/" target="_blank" rel="noopener noreferrer">
          <div className="project-image">
            <img src="https://res.cloudinary.com/dsira9sgt/image/upload/v1571347287/Daniel%20Garcia/Screenshot_201_dhjjli.png" alt="Ironemblem" />
          </div>
          <h3>Ironemblem</h3>
          <div>
            <p>A tactical multiplayer game, heavily inspired in the classic Fire Emblem games. </p>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Canvas</li>
            </ul>
          </div>
        </a>
        <a className="project-container" href="https://dan-gis-raudo.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="project-image">
            <img src="https://res.cloudinary.com/dsira9sgt/image/upload/v1571347286/Daniel%20Garcia/Screenshot_202_ohwosc.png" alt="raudo" />
          </div>
          <h3>Raudo</h3>
          <div>
            <p>A webapp that lets you connect with the professionals you need in your everyday life.</p>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Handlebars</li>
              <li>Bulma</li>
            </ul>
          </div>
        </a>
        <a className="project-container" href="https://atldan-minerva.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="project-image">
            <img src="https://res.cloudinary.com/dsira9sgt/image/upload/v1571347286/Daniel%20Garcia/Screenshot_203_yggrau.png" alt="minerva" />
          </div>
          <h3>Minerva</h3>
          <div>
            <p>Minerva is a quotes and references manager that aims to become a useful tool for humanistic research. </p>
            <ul>
              <li>Node.js</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Draft.js</li>
            </ul>
          </div>
        </a>
      </div>
    </CSSTransition>
  )
}
