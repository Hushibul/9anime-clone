import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "../../contexts/AnimeContext";

import AnimeCard from "../cards/AnimeCard";

const SuggestedGrid = () => {
  const [anime, setAnime] = useState([]);

  const { animeData, loading } = useContext(AnimeContext);

  if (loading) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>Loading...</h5>;
  }

  if (!animeData || !animeData.suggested || animeData.suggested.length === 0) {
    return <h5 className='text-white font-semibold text-2xl text-center my-4'>No suggested anime available.</h5>;
  }

  const { suggested } = animeData;
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="mx-2 mb-5">Suggested</h2>
      </div>
      <div
        name="card-container"
        className="grid grid-cols-3 gap-3 md:grid-cols-6"
      >
        {suggested.map((e) => (
          <Link key={e.id} to={`/watch/${e.name}`} state={{ anime }}>
            <div
              onTouchStart={() => setAnime(e)}
              onMouseOver={() => setAnime(e)}
            >
              <AnimeCard
                key={e.id}
                name={e.name}
                image={e.image}
              />
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SuggestedGrid;
