import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

const WatchMessge = () => {
  return (
    <div className="py-4 px-4 mx-2 my-10 bg-neutral-800 rounded">
      <p className="text-gray-400 flex gap-1 items-center">
        <BsFillInfoCircleFill />
        Now room owner can{" "}
        <span className="text-green-400">
          seek, pause, resume the video,
        </span>{" "}
        <span className="text-yellow-600">change episode</span> and close their
        room at any time.
      </p>
    </div>
  );
};

export default WatchMessge;
