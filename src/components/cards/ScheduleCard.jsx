import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ScheduleCard = ({ id, name, airTime, numOfEpisode }) => {
  return (
    <Link to={`/watch/${id}`}>
      <div className='mx-2 px-2 flex flex-col py-4 group hover:bg-indigo-900 rounded-md'>
        <div className='flex justify-between items-center py-2'>
          <h3 className='text-sm font-bold'>{airTime}</h3>
          <button className='bg-neutral-900 flex gap-2 text-xs items-center px-2 py-2 rounded mr-3 group-hover:bg-purple-700'>
            <FaPlay /> Episode {numOfEpisode ?? '?'}
          </button>
        </div>
        <h3 className='text-sm'>{name}</h3>
      </div>
    </Link>
  );
};

export default ScheduleCard;
