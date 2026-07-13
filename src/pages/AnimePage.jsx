import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAnimeById } from '../api/anilist';
import Comments from '../components/cards/Comments';
import EpisodeList from '../components/cards/EpisodeList';
import Video from '../components/cards/Video';
import AnimeContainer from '../components/containers/AnimeContainer';
import SuggestedGrid from '../components/containers/SuggestedGrid';
import Sidebar from '../components/sidebars/Sidebar';
import { useAsync } from '../hooks/useAnime';

const AnimePage = () => {
  // The id comes from the URL, so a refresh or a shared link works the same as a
  // click-through. The old version read the anime off router state, which was
  // empty on both.
  const { id } = useParams();
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const fetchAnime = useCallback(() => getAnimeById(id), [id]);

  const {
    data: anime,
    loading,
    error,
  } = useAsync(fetchAnime, [id], { skip: !id });

  if (!id) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-8'>
        Pick an anime to start watching.
      </h5>
    );
  }

  if (loading) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-8'>
        Loading...
      </h5>
    );
  }

  if (error || !anime) {
    return (
      <h5 className='text-white font-semibold text-2xl text-center my-8'>
        Could not load this anime. {error}
      </h5>
    );
  }

  return (
    <div className='container w-full mx-auto'>
      <section className='flex flex-col gap-4 w-full md:flex-row'>
        {/* Main Section  */}
        <main className='max-w-full flex flex-col flex-1'>
          <Video anime={anime} episode={selectedEpisode} />
          <EpisodeList
            episodes={anime.episodeList}
            totalEpisodes={anime.numberOfEpisode}
            selectedEpisode={selectedEpisode}
            onSelect={setSelectedEpisode}
          />
          <AnimeContainer anime={anime} />
          <Comments />
          <SuggestedGrid animeId={id} />
        </main>

        {/* Sidebar */}
        <aside className='mt-3 basis-[30%]'>
          <Sidebar />
        </aside>
      </section>
    </div>
  );
};

export default AnimePage;
