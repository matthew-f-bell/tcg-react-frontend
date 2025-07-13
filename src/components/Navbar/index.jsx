import React from 'react';

import '../../stylesheets/index.scss';

// Navbar Component
function Navbar() {
  return(
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
  );
}

export default Navbar;