import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <nav className='w-full md:w-1/2 p-4 flex items-center justify-between'>
      <Link to='/'>
        <img 
          src={Logo}
          alt='logo'
          className='w-10'
        />
      </Link>
      <div className='flex gap-4 md:gap-10'>
        <Link to='/' className='text-lg font-semibold'>
          Home
        </Link>
        <Link to='#exercises' className='text-lg font-semibold'>
          Exercises
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
