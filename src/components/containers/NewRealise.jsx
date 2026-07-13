import React, { Fragment, useContext } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import HAnimeCard from '../cards/HAnimeCard';

const Column = ({ title, items, empty, className = 'flex' }) => (
  <section className={`${className} flex-col mx-2`}>
    <h3 className='text-lg text-gray-400 flex'>
      {title}
      <HiArrowNarrowRight className='hidden text-white mx-2 text-2xl md:block' />
    </h3>

    {items?.length > 0 ? (
      items.map((anime) => (
        <Link key={anime.id} to={`/watch/${anime.id}`}>
          <HAnimeCard
            image={anime.image}
            name={anime.name}
            numOfEpisode={anime.numberOfEpisode}
            type={anime.type}
            dateAired={anime.premiered}
          />
        </Link>
      ))
    ) : (
      <p className='text-gray-400'>{empty}</p>
    )}
  </section>
);

const NewRealise = () => {
  const { animeData, loading, error } = useContext(AnimeContext);

  if (loading) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-4'>
        Loading...
      </h5>
    );
  }

  if (error || !animeData) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-4'>
        No anime data available.
      </h5>
    );
  }

  const { newRelease, newAdded, justCompleted } = animeData;

  return (
    <Fragment>
      <section className='hidden md:flex rounded mx-2 mb-5'>
        <button className='w-2/3 my-4 text-gray-300 bg-purple-900 text-xs font-semibold py-2'>
          New Realease
        </button>
        <button className='w-2/3 my-4 bg-neutral-900 text-gray-300 text-xs font-semibold'>
          New Added
        </button>
        <button className='w-2/3 my-4 bg-neutral-900 text-gray-300 text-xs font-semibold'>
          Just Completed
        </button>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3'>
        <Column
          title='NEW REALEASE'
          items={newRelease}
          empty='No new releases'
        />
        {/* Secondary columns stay desktop-only, as before. */}
        <Column
          title='NEW ADDED'
          items={newAdded}
          empty='No new added'
          className='hidden md:flex'
        />
        <Column
          title='JUST COMPLETED'
          items={justCompleted}
          empty='No animes just completed'
          className='hidden md:flex'
        />
      </div>
    </Fragment>
  );
};

export default NewRealise;
