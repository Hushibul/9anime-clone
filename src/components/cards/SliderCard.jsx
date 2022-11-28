import React from "react";
import { AiFillAudio } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const SliderCard = ({ image, title, heading }) => {
  const string = JSON.stringify(heading);
  const str = string.substring(0, 150);
  const last = str.replace(/[""]/g, "");
  return (
    <div className="flex gap-8">
      {/* moblie  */}
      <div className="absolute top-36 left-0 w-full md:hidden">
        <h1>{title}</h1>

        <p className="text-white leading-5 w-1/2 md:text-gray-500">
          {last + "..."}
        </p>
        <button className="w-[140px] mt-2 text-sm py-1 font-medium rounded-md px-4 z-10 opacity-100 flex items-center">
          <FaPlay className="text-white mr-2" /> PLAY NOW
        </button>
      </div>

      {/* desktop  */}
      <div className="hidden md:flex flex-col md:w-2/6 py-8 mx-2 my-2 gap-3 ">
        <h1 className="z-10">{title}</h1>
        <div className="hidden md:flex gap-3">
          <p className="text-[10px] border border-gray-color px-1">PG 13</p>
          <p className="bg-gray-600 text-[11px] text-black px-1">HD</p>
          <p className="bg-gray-600 text-[11px] text-black font-semibold px-1">
            CC
          </p>
          <p>
            <AiFillAudio />{" "}
          </p>
          <p className="text-[15px]">14 Oct, 2022</p>
        </div>
        <p className="text-white leading-5 md:text-gray-500">{last + "..."}</p>
        <button className="w-[100px] mt-2 text-base md:w-[180px] py-1 md:text-xl font-medium rounded-md md:mt-8">
          PLAY NOW
        </button>
      </div>

      <img
        className="opacity-25 w-full rounded-lg mx-0 object-fill h-[320px] md:w-[825px] md:h-[360px] md:mx-2 my-2 md:opacity-100"
        src={image}
        alt="imageSlide-1"
      />
    </div>
  );
};

export default SliderCard;
