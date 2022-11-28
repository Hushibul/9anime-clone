import React, { Fragment, useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import AdMessage from "../headings/AdMessage";
import AnimeCard from "../cards/AnimeCard";
import { AnimeContext } from "../../contexts/AnimeContext";
import { Link } from "react-router-dom";

const MainGrid = () => {
  const [anime, setAnime] = useState([]);

  const { animeData } = useContext(AnimeContext);
  const { recentlyUpdate } = animeData;
  return (
    <Fragment>
      <AdMessage />
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="mx-2">Recently Update</h2>
        <ul className="flex py-4 gap-3 text-gray-400 text mx-2">
          <li>All</li>
          <li>Sub</li>
          <li>Dub</li>
          <li>Chiense</li>
          <li>Trending</li>
          <li>Random</li>
        </ul>
      </div>
      <div
        name="card-container"
        className="grid grid-cols-3 gap-3 md:grid-cols-6"
      >
        {recentlyUpdate.map((e) => (
          <Link key={e.id} to="/watch" state={{ anime }}>
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
      {console.log(anime)}
      <section className="flex mx-2 my-6 md:hidden">
        <IoIosArrowBack className="w-2/2 mr-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
        <IoIosArrowForward className="w-2/2 ml-2 bg-neutral-800 text-gray-300 py-2 text-3xl" />
      </section>
    </Fragment>
  );
};

export default MainGrid;
