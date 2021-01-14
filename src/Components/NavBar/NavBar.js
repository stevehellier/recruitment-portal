import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-dark fixed-top bg-primary flex-md-nowrap shadow'>
          <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='/'>
            Recruitment Portal
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='/contract-stats'>
                Contracts Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='/perm-stats'>
                Perm Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='/recruiters-activity'>
                Recruiters Activity
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='/live-vacancies'>
                Live Vacancies
              </a>
            </li>
          </ul>
          <ul className='navbar-nav px-0'>
            <li className='nav-item text-nowrap'>
              <a className='nav-link disabled' href='/logout'>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
