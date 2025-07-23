// Library Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Style Import
import '../../stylesheets/index.scss';

// Navbar Component
function Navbar() {
  return(
    <nav className='navcontainer'>
      <a href='/' className='navbar leftnav'>Home</a>
      <a href='/series' className='navbar leftnav'>Series</a>
      <a href='/decks' className='navbar leftnav'>Decks</a>
      <a href='/profile' className='navbar rightnav'>Profile</a>
    </nav>
  );
};

export default Navbar;