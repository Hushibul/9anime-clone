import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
const AdMessage = () => {
  return (
    <div className="py-4 px-4 mx-2 my-10 bg-neutral-800 rounded">
      <p className="text-gray-400 flex gap-1 items-center">
        <BsFillInfoCircleFill />
        Please help us by sharing the site to your friend
      </p>
    </div>
  );
};

export default AdMessage;
