import React, { Fragment } from "react";

const EpisodeList = () => {
  return (
    <Fragment>
      <section className="mx-2 flex gap-2">
        <div className="px-2 text-[10px] text-gray-400 bg-black py-1">
          Sub & Dub
        </div>
        <div className="px-2 text-[10px] text-gray-400 bg-black py-1">1-8</div>
        <input
          className="px-3 text-[10px] placeholder:text-gray-400 bg-black py-1"
          placeholder="Episode Number"
          type="text"
        />
      </section>
      <section className="mx-2 flex flex-col my-2">
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
        <p className="px-2 py-2">Episode One</p>
      </section>
    </Fragment>
  );
};

export default EpisodeList;
