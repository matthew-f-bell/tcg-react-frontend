import React from 'react';

import '../../stylesheets/index.scss';

// Navbar Component
function Navbar() {
  return(
    <div class="navcontainer">
      <div className="leftnav">
        <div class="navbar" id="nav-home">
          <div href="">Home</div>
        </div>
        <div class="navbar" id="nav-series">
          <div href="">Series</div>
        </div>
        <div class="navbar" id="nav-decks">
          <div href="">Decks</div>
        </div>
      </div>
      <div className="rightnav">
        <div class="navbar" id="nav-profile">
          <div href="">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;