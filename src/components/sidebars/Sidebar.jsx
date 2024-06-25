import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import RankAnimeCard from './RankAnimeCard';

const Sidebar = () => {
  const { animeData } = useContext(AnimeContext);
  const { day } = animeData;
  const { week } = animeData;
  const { month } = animeData;

  const [data, setData] = useState(day);
  const [anime, setAnime] = useState([]);

  return (
    <main className='mx-2 flex flex-col'>
      <div className='flex my-6 items-center justify-between'>
        <h2>Top anime</h2>
        <div className='flex items-center gap-x-2'>
          <button
            onClick={() => {
              setData(day);
            }}
            className={
              data === day
                ? 'bg-purple-800 px-2  py-2 rounded  text-white text-xs'
                : 'bg-primary-color px-2  py-0 rounded  text-white text-xs'
            }
          >
            Day
          </button>

          <button
            onClick={() => {
              setData(week);
            }}
            className={
              data === week
                ? 'bg-purple-800 px-2  py-2 rounded  text-white text-xs'
                : 'bg-primary-color px-2  py-0 rounded  text-white text-xs'
            }
          >
            Week
          </button>
          <button
            onClick={() => {
              setData(month);
            }}
            className={
              data === month
                ? 'bg-purple-800 px-2  py-2 rounded  text-white text-xs'
                : 'bg-primary-color px-2  py-0 rounded  text-white text-xs'
            }
          >
            Month
          </button>
        </div>
      </div>

      {data.map((e) => (
        <Link key={e.id} to={`/watch/${e.name}`} state={{ anime }}>
          <div onTouchStart={() => setAnime(e)} onMouseOver={() => setAnime(e)}>
            <RankAnimeCard
              name={e.name}
              id={e.id}
              image={e.image}
              views={e.views}
              numOfEpisode={e.numberOfEpisode}
            />
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Sidebar;
