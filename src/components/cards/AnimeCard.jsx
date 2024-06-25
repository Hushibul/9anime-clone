import React from 'react';
import { FaPlay } from 'react-icons/fa';

const AnimeCard = ({ image, name, type, numOfEpisode }) => {
  return (
    <section className='ml-2 flex flex-col mb-10'>
      <div className='h-[250px] bg-neutral-800 group relative rounded-md flex flex-col justify-between overflow-hidden'>
        <div className='max-w-full min-h-[85%] object-cover overflow-hidden'>
          <img className='object-cover min-h-full' src={image} alt='bleach' />
        </div>
        <div className='flex justify-between items-center my-2'>
          <div className='ml-2 text-[10px] items-center flex'>
            <span className='text-[9px] bg-white p-1 rounded-sm text-purple-600 font-semibold mr-1'>
              cc
            </span>

            <span className='text-[9px] p-1 rounded-sm text-white bg-purple-600 font-semibold mr-1'>
              {numOfEpisode}
            </span>
          </div>
          <p className='text-xs text-gray-300 p-1 items-center'>{type}</p>
        </div>
        <FaPlay className='hidden text-white text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer group-hover:block' />
      </div>
      <h4 className='text-sm w-full mt-4 text-gray-300 hover:text-purple-400'>
        {name}
      </h4>
    </section>
  );
};

export default AnimeCard;
