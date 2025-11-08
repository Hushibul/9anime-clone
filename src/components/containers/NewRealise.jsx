import React, { Fragment, useContext, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import HAnimeCard from '../cards/HAnimeCard';

const NewRealise = () => {
  const [anime, setAnime] = useState([]);

  const { animeData, loading } = useContext(AnimeContext);

  if (loading) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>Loading...</h5>;
  }

  if (!animeData) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>No anime data available.</h5>;
  }

  const { newRelease, newAdded, justCompleted } = animeData;
  return (
    <Fragment>
      <section className='hidden md:flex rounded mx-2 mb-5'>
        <button className='w-2/3 my-4 text-gray-300 bg-purple-900 text-xs font-semibold py-2'>
          New Realease
        </button>
        <button className='w-2/3 my-4 bg-neutral-900 text-gray-300 text-xs font-semibold'>
          New Added{' '}
        </button>
        <button className='w-2/3 my-4 bg-neutral-900 text-gray-300 text-xs font-semibold'>
          Just Completed{' '}
        </button>
      </section>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <section className='flex flex-col mx-2'>
          <h3 className='text-lg text-gray-400 flex'>
            NEW REALEASE
            <HiArrowNarrowRight className='hidden text-white mx-2 text-2xl md:block' />{' '}
          </h3>

          {newRelease.length > 0 ? newRelease.map((e) => (
            <Link key={e.id} to={`/watch/${e.name}`} state={{ anime }}>
              <div
                onTouchStart={() => setAnime(e)}
                onMouseOver={() => setAnime(e)}
              >
                <HAnimeCard
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  numOfEpisode={e.numberOfEpisode}
                  type={e.type}
                  dateAired={e.premiered}
                />
              </div>
            </Link>
          )) : <p>No new releases</p>}
        </section>
        <section className='hidden md:flex flex-col mx-2'>
          <h3 className='text-lg text-gray-400 flex'>
            NEW ADDED
            <HiArrowNarrowRight className='hidden text-white mx-2 text-2xl md:block' />{' '}
          </h3>
          {newAdded.length > 0 ? newAdded.map((e) => (
            <Link key={e.id} to='/watch' state={{ anime }}>
              <div
                onTouchStart={() => setAnime(e)}
                onMouseOver={() => setAnime(e)}
              >
                <HAnimeCard
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  numOfEpisode={e.numberOfEpisode}
                  type={e.type}
                  dateAired={e.premiered}
                />
              </div>
            </Link>
          )) : <p>No new added</p>}
        </section>
        <section className='hidden md:flex flex-col mx-2'>
          <h3 className='text-lg text-gray-400 flex'>
            JUST COMPLETED
            <HiArrowNarrowRight className='hidden text-white mx-2 text-2xl md:block' />
          </h3>
          {justCompleted.length > 0 ? justCompleted.map((e) => (
            <Link key={e.id} to='/watch' state={{ anime }}>
              <div
                onTouchStart={() => setAnime(e)}
                onMouseOver={() => setAnime(e)}
              >
                <HAnimeCard
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  numOfEpisode={e.numberOfEpisode}
                  type={e.type}
                  dateAired={e.premiered}
                />
              </div>
            </Link>
          )) : <p>No animes just completed</p>}
        </section>
      </div>
    </Fragment>
  );
};

export default NewRealise;
