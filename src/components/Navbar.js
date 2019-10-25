import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
      <ul className="social">
        <li><a href="https://github.com/danielgrj" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.linkedin.com/in/danielgrj/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
      </ul>
    </nav>
  );
}
