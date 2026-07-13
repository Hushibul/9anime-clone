import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../cards/AnimeCard';

const Message = ({ children }) => (
  <h5 className='text-white font-semibold text-2xl text-center my-4'>
    {children}
  </h5>
);

// Every listing page renders the same grid of cards; they only differ in where
// the list comes from. Linking by id is what lets the watch page reload itself
// from the API on a refresh.
const AnimeGrid = ({ items, loading, error, empty = 'No anime available.' }) => {
  if (loading) return <Message>Loading...</Message>;
  if (error) return <Message>Could not load anime. {error}</Message>;
  if (!items || items.length === 0) return <Message>{empty}</Message>;

  return (
    <main className='grid grid-cols-3 gap-3 md:grid-cols-5 xl:grid-cols-6'>
      {items.map((anime) => (
        <Link key={anime.id} to={`/watch/${anime.id}`}>
          <AnimeCard
            name={anime.name}
            image={anime.image}
            type={anime.type}
            numOfEpisode={anime.numberOfEpisode}
          />
        </Link>
      ))}
    </main>
  );
};

export default AnimeGrid;
