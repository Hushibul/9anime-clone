import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AnimeContainer = ({ anime }) => {
  return (
    <Fragment>
      <div className='mx-2 flex gap-3 my-6'>
        <section className='w-1/12 rounded overflow-hidden'>
          <img src={anime.image} alt={anime.id} />
        </section>
        <section className='flex flex-col gap-2 w-11/12'>
          <h2>{anime.name}</h2>
          <p className='text-xs'>{anime.name}</p>
          <p className='text-xs'>{anime.description}</p>

          <div className='flex flex-col gap-1'>
            <p className='text-xs'>
              Type:{' '}
              <Link className='text-purple-600 font-medium' to=''>
                {anime.type}
              </Link>{' '}
            </p>
            <p className='text-xs'>
              Studio:{' '}
              <Link className='text-purple-600 font-medium' to=''>
                {anime.studio}
              </Link>{' '}
            </p>
            <p className='text-xs'>
              Date aired:{' '}
              <span className='text-gray-300 font-medium'>
                {anime.dateAired}
              </span>
            </p>
            <p className='text-xs'>
              Broadcast:{' '}
              <span className='text-gray-300 font-medium'>
                {anime.broadcast}
              </span>
            </p>
            <p className='text-xs'>
              Status:{' '}
              <span className='text-gray-300 font-medium'>Releasing</span>
            </p>
            <p className='text-xs'>
              Genre:{' '}
              {anime.genre.map((e, i) => (
                <Link key={i} className='text-purple-600 font-medium' to=''>
                  {e},
                </Link>
              ))}
            </p>
            <p className='text-xs'>
              Country:{' '}
              <Link className='text-purple-600 font-medium' to=''>
                {anime.country}
              </Link>{' '}
            </p>
            <p className='text-xs'>
              Scores:{' '}
              <span className='text-gray-300 font-medium'>{anime.score}</span>
            </p>
            <p className='text-xs'>
              Premired:{' '}
              <Link className='text-purple-600 font-medium' to=''>
                {anime.premiered}
              </Link>{' '}
            </p>
            <p className='text-xs'>
              Duration:{' '}
              <span className='text-gray-300 font-medium'>
                {anime.duration}
              </span>
            </p>
            <p className='text-xs'>
              Viwes:{' '}
              <span className='text-gray-300 font-medium'>{anime.views}</span>
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AnimeContainer;
