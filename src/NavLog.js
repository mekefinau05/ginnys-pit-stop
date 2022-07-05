import React from 'react';
import './NavLog.css';
import { Link } from 'react-router-dom';

function NavLog() {
  return (
    <nav className='NavLog'>
      <Link className='link' to='/'>
        Home
      </Link>
      {'  '}|{'  '}
      <Link className='link' to='/login'>
        Login
      </Link>
      {'  '}|{'  '}
      <Link className='link' to='/register'>
        Signup
      </Link>
    </nav>
  );
}

export default NavLog;
