import React from "react";

const LiveCard = ({
  viewStatus,
  image,
  name,
  episodeNo,
  duration,
  viewing,
}) => {
  const string = JSON.stringify(name);
  const str = string.substring(0, 16);
  const last = str.replace(/[""]/g, "");

  return (
    <section>
      <div className="flex gap-3 px-6 py-8 bg-neutral-900 rounded-xl hover:bg-neutral-700">
        <div className="w-[30%]">
          <img className="h-20" src={image} alt="imageLive" />
        </div>
        <div className="w-[70%]">
          <span
            className={
              viewStatus === "WATING"
                ? "p-1 text-white text-sm font-medium rounded bg-green-600"
                : "p-1 text-white text-sm font-medium rounded bg-red-600"
            }
          >
            {viewStatus}
          </span>
          <h6 className="text-white font-medium my-2">{last}...</h6>
          <div className="flex gap-2">
            <p>Ep {episodeNo}</p>
            <p>
              {" "}
              <span className="text-[9px] bg-white p-0 text-gray-600 font-semibold mr-1">
                cc
              </span>{" "}
              Sub
            </p>
            <p>{duration}</p>
            <p
              className={
                viewStatus === "WATING" ? "text-red-600" : "text-green-500"
              }
            >
              {viewing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCard;
