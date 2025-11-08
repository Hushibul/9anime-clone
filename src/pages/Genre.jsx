import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../components/cards/AnimeCard';
import { AnimeContext } from '../contexts/AnimeContext';

const GenrePage = () => {
  const [anime, setAnime] = useState([]);

  const { animeData, loading } = useContext(AnimeContext);

  if (loading) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>Loading...</h5>;
  }

  if (!animeData || !animeData.recentlyUpdate || animeData.recentlyUpdate.length === 0) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>No anime available.</h5>;
  }

  const { recentlyUpdate } = animeData;
  return (
    <section className='mx-2'>
      <h2>Genre</h2>

      <main className='grid gap-2 grid-cols-1 md:grid-cols-4'>
        {recentlyUpdate.map((e) => (
          <Link key={e.id} to='/watch' state={{ anime }}>
            <div
              onTouchStart={() => setAnime(e)}
              onMouseOver={() => setAnime(e)}
            >
              <AnimeCard
                key={e.id}
                name={e.name}
                image={e.image}
                type={e.type}
                numOfEpisode={e.numberOfEpisode}
              />
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default GenrePage;
