import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LiveCard from '../components/cards/LiveCard';
import { AnimeContext } from '../contexts/AnimeContext';

const Watch2gather = () => {
  const { animeData, loading, error } = useContext(AnimeContext);

  if (loading) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-4'>
        Loading...
      </h5>
    );
  }

  if (error || !animeData?.day?.length) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-4'>
        No rooms available right now.
      </h5>
    );
  }

  // Watch2gather rooms aren't a real thing in the API — this browses the
  // currently-airing titles you could open a room for.
  const rooms = animeData.day;

  return (
    <section className='container'>
      <div className='flex gap-2 mt-4'>
        <Link to='/'>
          <p className='text-gray-600'>Home</p>
        </Link>
        <p className='text-gray-600'>/</p>
        <Link to='/watch2gather'>
          <p>Watch2Gather</p>
        </Link>
      </div>
      <h2 className='mt-2'>Browse</h2>

      <main className='grid gap-2 grid-cols-1 md:grid-cols-4 mt-4'>
        {rooms.map((anime) => (
          <Link key={anime.id} to={`/watch/${anime.id}`}>
            <LiveCard
              name={anime.name}
              image={anime.image}
              viewStatus={
                anime.status === 'Currently Airing' ? 'WATCHING' : 'WAITING'
              }
              episodeNo={anime.numberOfEpisode}
              duration={anime.duration}
              viewing={anime.views?.toLocaleString()}
            />
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Watch2gather;
