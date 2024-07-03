import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../components/cards/AnimeCard';
import { AnimeContext } from '../contexts/AnimeContext';
import { LoginContext } from '../contexts/LoginContext';

const GenrePage = () => {
  const [anime, setAnime] = useState([]);

  const { animeData } = useContext(AnimeContext);
  const { query } = useContext(LoginContext);

  const { recentlyUpdate } = animeData;
  return (
    <section className='container'>
      <h2 className='text-red-600 my-6'>
        Specific Genre system still not available
      </h2>

      <main className='grid gap-2 grid-cols-1 md:grid-cols-6'>
        {recentlyUpdate
          .filter((item) => item.name.toLowerCase().includes(query))
          .map((e) => (
            <Link key={e.id} to={`/watch/${e.name}`} state={{ anime }}>
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
