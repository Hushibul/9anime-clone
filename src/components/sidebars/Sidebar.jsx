import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import RankAnimeCard from './RankAnimeCard';

const Sidebar = () => {
  const { animeData, loading } = useContext(AnimeContext);
  const [data, setData] = useState([]);
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    if (animeData && animeData.day) {
      setData(animeData.day);
    }
  }, [animeData]);

  if (loading) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>Loading...</h5>;
  }

  if (!animeData) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>No anime data available.</h5>;
  }

  const { day, week, month } = animeData;

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

      {data.length > 0 ? data.map((e, index) => (
        <Link key={e.id} to={`/watch/${e.id}`} state={{ anime }}>
          <div onTouchStart={() => setAnime(e)} onMouseOver={() => setAnime(e)}>
            <RankAnimeCard
              name={e.name}
              id={index + 1}
              image={e.image}
              views={e.views}
              numOfEpisode={e.numberOfEpisode}
            />
          </div>
        </Link>
      )) : <p>No anime in this category</p>}
    </main>
  );
};

export default Sidebar;
