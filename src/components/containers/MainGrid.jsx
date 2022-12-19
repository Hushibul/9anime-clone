import React, { Fragment, useContext, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import AdMessage from "../headings/AdMessage";
import AnimeCard from "../cards/AnimeCard";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";

const MainGrid = () => {
  const { animeData } = useContext(AnimeContext);
  const { query } = useContext(LoginContext);
  const { recentlyUpdate, newRelease, newAdded, justCompleted } = animeData;

  const [anime, setAnime] = useState([]);
  const [animeArray, setAnimeArray] = useState(recentlyUpdate);

  return (
    <Fragment>
      <AdMessage />
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="mx-2">Recently Update</h2>
        <ul className="flex py-4 gap-3 text-gray-400 text mx-2">
          <li
            className={"cursor-pointer py-1"}
            onClick={() => setAnimeArray(recentlyUpdate)}
          >
            All
          </li>
          <li
            className="cursor-pointer py-1"
            onClick={() => setAnimeArray(newRelease)}
          >
            Sub
          </li>
          <li
            className="cursor-pointer py-1"
            onClick={() => setAnimeArray(newAdded)}
          >
            Dub
          </li>
          <li className="cursor-pointer py-1">Chiense</li>
          <li
            className="cursor-pointer py-1"
            onClick={() => setAnimeArray(justCompleted)}
          >
            Trending
          </li>
          <li className="cursor-pointer py-1">Random</li>
        </ul>
      </div>
      <div
        name="card-container"
        className="grid grid-cols-3 gap-3 md:grid-cols-6"
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
      {/* <section className="flex mx-2 my-6 md:hidden">
        <IoIosArrowBack className="w-2/2 mr-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
        <IoIosArrowForward className="w-2/2 ml-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
      </section> */}
    </Fragment>
  );
};

export default MainGrid;
