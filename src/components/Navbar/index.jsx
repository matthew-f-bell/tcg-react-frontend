// Library Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Style Import
import '../../stylesheets/index.scss';

// Navbar Component
function Navbar() {
  return(
    <nav className='navcontainer'>
      <Link to='/' className='navbar leftnav'>Home</Link>
      <Link to='/series' className='navbar leftnav'>Series</Link>
      <Link to='/decks' className='navbar leftnav'>Decks</Link>
      <Link to='/profile' className='navbar rightnav'>Profile</Link>
    </nav>
  );
};

export default Navbar;