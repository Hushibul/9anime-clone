import React, { Fragment, useContext, useState } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import { LoginContext } from '../../contexts/LoginContext';
import AnimeCard from '../cards/AnimeCard';
import AdMessage from '../headings/AdMessage';

const MainGrid = () => {
  const { animeData } = useContext(AnimeContext);
  const { query } = useContext(LoginContext);
  const { recentlyUpdate, newRelease, newAdded, justCompleted } = animeData;

  const [anime, setAnime] = useState([]);
  const [animeArray, setAnimeArray] = useState(recentlyUpdate);

  // Randomize Array
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  return (
    <Fragment>
      <AdMessage />
      <div className='flex flex-col md:flex-row justify-between'>
        <h2 className='mx-2'>Recently Update</h2>
        <ul className='flex items-center flex-wrap py-4 gap-x-3 text-gray-400 text mx-2'>
          <li
            className={`cursor-pointer py-1 ${
              animeArray === recentlyUpdate && 'text-white'
            }`}
            onClick={() => setAnimeArray(recentlyUpdate)}
          >
            All
          </li>
          <li
            className={`cursor-pointer py-1 ${
              animeArray === newRelease && 'text-white'
            }`}
            onClick={() => setAnimeArray(newRelease)}
          >
            Sub
          </li>
          <li
            className={`cursor-pointer py-1 ${
              animeArray === newAdded && 'text-white'
            }`}
            onClick={() => setAnimeArray(newAdded)}
          >
            Dub
          </li>
          <li
            onClick={() => setAnimeArray([])}
            className={`cursor-pointer py-1 ${
              animeArray?.length <= 0 && 'text-white'
            }`}
          >
            Chinese
          </li>
          <li
            className={`cursor-pointer py-1 ${
              animeArray === justCompleted && 'text-white'
            }`}
            onClick={() => setAnimeArray(justCompleted)}
          >
            Trending
          </li>
          <li
            onClick={() =>
              setAnimeArray((prevArray) => shuffleArray(prevArray))
            }
            className='cursor-pointer py-1'
          >
            Random
          </li>
        </ul>
      </div>

      {animeArray?.length > 0 ? (
        <div
          name='card-container'
          className='grid grid-cols-3 gap-3 md:grid-cols-5 xl:grid-cols-6'
        >
          {animeArray
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
        </div>
      ) : (
        <h5 className='text-white font-semibold text-2xl text-center my-4'>
          No anime of this type currently available
        </h5>
      )}

      {/* <section className="flex mx-2 my-6 md:hidden">
        <IoIosArrowBack className="w-2/2 mr-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
        <IoIosArrowForward className="w-2/2 ml-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
      </section> */}
    </Fragment>
  );
};

export default MainGrid;
