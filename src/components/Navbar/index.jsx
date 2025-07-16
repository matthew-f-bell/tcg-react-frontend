import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/index.scss';

// Navbar Component
function Navbar() {
  return(
/*---------------------------------------------------
    <div className="navcontainer">
      <div className="leftnav">
        <div className="navbar" id="nav-home">
          <div>Home</div>
        </div>
        <div className="navbar" id="nav-series">
          <div>Series</div>
        </div>
        <div className="navbar" id="nav-decks">
          <div>Decks</div>
        </div>
      </div>
      <div className="rightnav">
        <div className="navbar" id="nav-profile">
          <div>Profile</div>
        </div>
      </div>
    </div>
---------------------------------------------------*/
    <nav className='navcontainer'>
      <a href='/' className='navbar leftnav'>Home</a>
      <a href='/series' className='navbar leftnav'>Series</a>
      <a href='/decks' className='navbar leftnav'>Decks</a>
      <a href='/profile' className='navbar rightnav'>Profile</a>
    </nav>
  );
};

export default Navbar;