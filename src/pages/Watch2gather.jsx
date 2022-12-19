import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LiveCard from "../components/cards/LiveCard";
import { AnimeContext } from "../contexts/AnimeContext";

const Watch2gather = () => {
  const [anime, setAnime] = useState([]);

  const { animeData } = useContext(AnimeContext);
  const { recentlyUpdate } = animeData;
  return (
    <section className="mx-2 ">
      <div className="flex gap-2">
        <Link to="/">
          <p className="text-gray-600">Home</p>
        </Link>
        <p className="text-gray-600">/</p>
        <Link to="watch2gather">
          <p>Watch2Gather</p>
        </Link>
      </div>
      <h2>Browse</h2>

      <main className="grid gap-2 grid-cols-1 md:grid-cols-4">
        {recentlyUpdate.map((e) => (
          <Link key={e.id} to="/watch" state={{ anime }}>
            <div
              onTouchStart={() => setAnime(e)}
              onMouseOver={() => setAnime(e)}
            >
              <LiveCard
                key={e.id}
                name={e.name}
                image={e.image}
                viewStatus={e.viewStatus}
                episodeNo={e.episodeNo}
                viewing={e.viewing}
              />
            </div>
          </Link>
        ))}

        {/* <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard /> */}
      </main>
    </section>
  );
};

export default Watch2gather;
