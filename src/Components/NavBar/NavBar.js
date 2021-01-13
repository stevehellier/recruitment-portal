import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h5>NAVBAR</h5>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/contract-stats'>Contract Stats</Link>
        </li>
        <li>
          <Link to='/perm-stats'>Perm Stats</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default NavBar;
