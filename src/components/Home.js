import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './home.css';

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={250} classNames="section">
      <div className="section-container home">
        <div className="speach-container">
          <div className="avatar">
            <img src="https://res.cloudinary.com/dsira9sgt/image/upload/v1571374617/Daniel%20Garcia/ava_i4outp.jpg" alt="Daniel Garcia"/>
          </div>
          <div className="text">
            <h1>Daniel Garcia</h1>
            <h2>Full Stack Web Developer</h2>
            <p>I am passionate about using technology to improve every aspect of our life’s. Continually looking to improve my skills and eager to help other improve theirs. Looking for a company that aims to create innovative and easy to use solutions for everyday problems.</p>
            <Link to="/portfolio">View my projects</Link>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
