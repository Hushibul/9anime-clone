import React, { Fragment } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  return (
    <Fragment className='mx-2 my-6 flex flex-col'>
      <video id='video'>
        <source
          src='https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4'
          type='video/mp4'
        />
      </video>
      <section className='px-2 flex py-1 bg-black justify-between'>
        <div className='flex'>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Auto Play
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Auto Next
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Light
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Prev
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Next
          </p>
        </div>
        <div className='flex mx-1'>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Report
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Add to List
          </p>
        </div>
      </section>
      <section className='py-3'>
        <p className='text-xs text-gray-400 text-center'>
          You're watching{' '}
          <span className='text-purple-600 font-medium'>Episode 8</span>. If
          current servers doesn't work. Please try other servers beside.
        </p>
      </section>
      <section className='px-2 py-2 flex bg-black items-center gap-2'>
        <div className='flex gap-2 items-center mr-6'>
          <p className='text-[8px] bg-gray-400 p-1 font-bold text-black rounded-sm'>
            CC
          </p>
          <p className='text-gray-400'>Sub</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap-1 rounded cursor-pointer items-center text-white bg-purple-600'>
          <BsFillPlayCircleFill />
          <p className='text-white'>Videostream</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap-1 hover:bg-gray-300 hover:text-black rounded cursor-pointer items-center text-gray-400 bg-neutral-900'>
          <BsFillPlayCircleFill />
          <p>MyCloud</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap-1 hover:bg-gray-300 hover:text-black rounded cursor-pointer items-center text-gray-400 bg-neutral-900'>
          <BsFillPlayCircleFill />
          <p>Filemoon</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap- hover:bg-gray-300 hover:text-black rounded cursor-pointer items-center text-gray-400 bg-neutral-900'>
          <BsFillPlayCircleFill />
          <p>Streamtape</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap-1 hover:bg-gray-300 hover:text-black rounded cursor-pointer items-center text-gray-400 bg-neutral-900'>
          <BsFillPlayCircleFill />
          <p>Mp4Upload</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Video;
