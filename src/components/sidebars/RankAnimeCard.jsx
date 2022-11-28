import React from "react";
import { BsFillEyeFill } from "react-icons/bs";

const RankAnimeCard = ({ name, id, image, numOfEpisode, views }) => {
  return (
    <div className="flex bg-neutral-900 items-center rounded-lg overflow-hidden group my-2 py-2 duration-300 hover:bg-neutral-800">
      <h1 className="font-bold text-6xl mx-2 text-gradiant">{id}</h1>
      <img src={image} alt="img" className="h-16 mr-6 group-hover:scale-110" />
      <div className="flex flex-col mx-2">
        <h4 className="text-sm text-gray-200">{name}</h4>

        <div className="flex my-1">
          <h6 className="text-[10px] text-white bg-purple-600 items-center flex">
            <p className="text-[9px] bg-white p-0 text-purple-600 font-semibold mr-1">
              cc
            </p>{" "}
            {numOfEpisode}
          </h6>

          <p className="text-xs text-gray-500 mx-6 flex gap-2 items-center">
            {" "}
            <BsFillEyeFill /> {views}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankAnimeCard;
