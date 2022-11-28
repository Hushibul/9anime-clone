import React from "react";

const HAnimeCard = ({ name, image, numOfEpisode, type, dateAired }) => {
  return (
    <div className="flex bg-neutral-900 items-center rounded-lg overflow-hidden my-2 py-2">
      <img src={image} alt="img" className="h-16 mr-6" />
      <div className="flex flex-col mx-2">
        <h4 className="text-sm text-gray-200">{name}</h4>

        <div className="flex my-1">
          <h6 className="text-[10px] text-white bg-purple-600 items-center flex">
            <p className="text-[9px] bg-white p-0 text-purple-600 font-semibold mr-1">
              cc
            </p>{" "}
            {numOfEpisode}
          </h6>
          <p className="text-xs text-gray-500 mx-1">.</p>
          <p className="text-xs text-gray-500 mx-1">{type}</p>
          <p className="text-xs text-gray-500 mx-1">.</p>
          <p className="text-xs text-gray-500 mx-1">{dateAired}</p>
        </div>
      </div>
    </div>
  );
};

export default HAnimeCard;
