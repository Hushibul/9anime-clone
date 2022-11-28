import React, { Fragment } from "react";

const Comments = () => {
  return (
    <Fragment>
      <section className="flex my-8 flex-col">
        <div className="mx-2 flex justify-between bg-primary-color items-center">
          <h2>Comments</h2>
          <div className="flex">
            <p className="bg-neutral-800 text-gray-500 py-1 px-2 rounded">
              Anime
            </p>
            <p className="bg-purple-600 text-gray-200 py-1 px-2 rounded">
              Episode 8 DUB
            </p>
            <p className="bg-neutral-800 text-gray-500 py-1 px-2 rounded">
              Rules
            </p>
          </div>
        </div>

        <div className="mx-2 h-[20vh] bg-neutral-800 flex justify-center items-center">
          <button className="px-3 py-2 rounded">Load More Comments</button>
        </div>
      </section>
    </Fragment>
  );
};

export default Comments;
