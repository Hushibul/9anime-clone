import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../components/cards/AnimeCard';
import { AnimeContext } from '../contexts/AnimeContext';
import { LoginContext } from '../contexts/LoginContext';

const NewestPage = () => {
  const [anime, setAnime] = useState([]);

  const { animeData } = useContext(AnimeContext);
  const { recentlyUpdate } = animeData;
  const { query } = useContext(LoginContext);

  return (
    <section className='container'>
      <h2>Newest</h2>

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

export default NewestPage;
