import React from 'react';
import { BsReddit, BsTwitter } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logos/logo.png';

const Footer = () => {
  return (
    <footer className='container flex flex-col py-4 mt-6'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='w-[150px] px-2' />
        <div className='bg-zinc-400 flex text-xs px-4 py-2 gap-4 items-center rounded-3xl'>
          Join now
          <BsTwitter className='text-sky-600 text-base cursor-pointer hover:scale-150 duration-300' />
          <BsReddit className='text-primary-color text-sm cursor-pointer hover:scale-150 hover:text-rose-700 duration-300' />
          <FaDiscord className='text-primary-color text-base cursor-pointer hover:scale-150 hover:text-violet-600 duration-300' />
        </div>
      </div>
      <div className='mx-2 flex gap-3 my-4'>
        <p>Help</p>
        <p className='text-gray-300 mx-2'>FAQ</p>
        <Link to='/contact'>
          <p className='text-gray-300 mx-2'>Contact</p>
        </Link>
        <p className='text-gray-300 mx-2'>Request</p>
      </div>
      <div className='mx-2 flex gap-3 my-4'>
        <p>Friends</p>
        <p className='text-gray-300 mx-2'>fmovies</p>
      </div>

      <div className='mx-2 flex flex-col mb-6'>
        <p className='text-sm'>
          Copyright &copy;{' '}
          <span className='font-bold cursor-pointer'>Hushibul</span>. All Rights
          Reserved
        </p>
        <p className='text-xs'>
          This site does not store any files. All Contents are provided by non
          affiliated third parties.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
