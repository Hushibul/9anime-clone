import React, { Fragment } from "react";
import HAnimeCard from "../cards/HAnimeCard";

const SidebarTwo = () => {
  return (
    <Fragment className="mx-2 flex flex-col">
      <div className="flex my-6">
        <h2>Trending</h2>
      </div>

      <HAnimeCard />
      <HAnimeCard />
      <HAnimeCard />
      <HAnimeCard />
    </Fragment>
  );
};

export default SidebarTwo;
