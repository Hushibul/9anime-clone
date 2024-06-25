import React from 'react';
import { BsFillEyeFill } from 'react-icons/bs';

const RankAnimeCard = ({ name, id, image, numOfEpisode, views }) => {
  return (
    <div
      className={`flex bg-neutral-900 items-center rounded-lg overflow-hidden group my-2 duration-300 hover:bg-neutral-800 ${
        id === 1
          ? 'border-r-2 border-[#5a2e98]'
          : id === 2
          ? 'border-r-2 border-rose-600'
          : id === 3
          ? 'border-r-2 border-[#ffc107]'
          : ''
      }`}
    >
      <h1
        className={`font-semibold text-7xl mx-2 ${
          id === 1
            ? 'text-gradiant-one'
            : id === 2
            ? 'text-gradiant-two'
            : id === 3
            ? 'text-gradiant-three'
            : 'text-gradiant'
        }`}
      >
        {id}
      </h1>
      <img
        src={image}
        alt='img'
        className='h-20 mr-6 group-hover:scale-110 duration-300 overflow-hidden object-cover'
      />
      <div className='flex flex-col mx-2 flex-1 py-2'>
        <h4 className='text-sm text-gray-200 mb-1'>{name}</h4>
        <div className='flex items-center justify-between'>
          <div className='items-center flex'>
            <span className='text-[10px] px-1  bg-purple-600 rounded-sm text-white font-semibold mr-1'>
              cc
            </span>
            <span className='text-[10px] bg-yellow-600 px-1 rounded-sm text-white font-semibold mr-1'>
              {numOfEpisode}
            </span>
          </div>

          <div className='flex gap-2 text-gray-500 items-center'>
            <BsFillEyeFill />
            <span className='text-xs'>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankAnimeCard;
