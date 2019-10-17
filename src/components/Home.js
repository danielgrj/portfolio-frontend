import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export default function Home() {
  return (
    <CSSTransition transitionName="section" transitionEnterTimeout={250} transitionLeaveTimeout={200}>
      <div className="section-container">
        <div className="speach-container">
          <p>Hello, I am Daniel Garcia a Full Stack Web Developer</p>
        </div>
        <Link>View my projects</Link>
      </div>
    </CSSTransition>
  );
}
