import React from 'react';

export const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper teal lighten-2 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">TODO List</a></li>
        <li><a href="badges.html">About</a></li>
      </ul>
    </div>
  </nav>
)