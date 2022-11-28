import React, { Fragment, useContext } from "react";
import { AnimeContext } from "../../contexts/AnimeContext";

import AnimeCard from "../cards/AnimeCard";

const SuggestedGrid = () => {
  const { animeData } = useContext(AnimeContext);
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
          <AnimeCard
            key={e.id}
            name={e.name}
            image={e.image}
            type={e.type}
            numOfEpisode={e.numberOfEpisode}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default SuggestedGrid;
