import React from "react";
import { FaPlay } from "react-icons/fa";

const AnimeCard = ({ image, name, type, numOfEpisode }) => {
  return (
    <section className="ml-2 flex flex-col mb-10">
      <div className="h-[250px] bg-neutral-800 group relative rounded-md overflow-hidden">
        <img src={image} alt="bleach" className="h-[220px] w-full" />
        <div className="flex justify-between my-auto items-center">
          <h6 className="ml-2 text-[10px] text-white bg-purple-600 items-center flex">
            <p className="text-[9px] bg-white p-0 text-purple-600 font-semibold mr-1">
              cc
            </p>{" "}
            {numOfEpisode}
          </h6>
          <p className="text-xs text-gray-300 p-1 items-center">{type}</p>
        </div>
        <FaPlay className="hidden text-white text-4xl absolute top-[100px] left-[90px] z-10 cursor-pointer group-hover:block md:left-[60px]" />
      </div>
      <h4 className="text-sm w-full mt-4 text-gray-300 hover:text-purple-400">
        {name}
      </h4>
    </section>
  );
};

export default AnimeCard;
