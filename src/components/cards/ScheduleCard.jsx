import React from "react";
import { FaPlay } from "react-icons/fa";

const ScheduleCard = () => {
  return (
    <div className="mx-2 px-2 flex flex-col py-4 group hover:bg-indigo-900 rounded-md">
      <div className="flex justify-between items-center py-2">
        <h3 className="text-sm font-bold">16:00</h3>
        <button className="bg-neutral-900 flex gap-2 text-xs items-center px-2 py-2 rounded mr-3 group-hover:bg-purple-700">
          {" "}
          <FaPlay /> Episode 22{" "}
        </button>
      </div>
      <h3 className="text-sm">Nights with a Cat</h3>
    </div>
  );
};

export default ScheduleCard;
