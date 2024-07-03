import React from 'react';
import { useLocation } from 'react-router-dom';

import Comments from '../components/cards/Comments';
import EpisodeList from '../components/cards/EpisodeList';
import Video from '../components/cards/Video';
import AnimeContainer from '../components/containers/AnimeContainer';
import SuggestedGrid from '../components/containers/SuggestedGrid';
import Sidebar from '../components/sidebars/Sidebar';
const AnimePage = () => {
  const location = useLocation();
  const anime = location.state?.anime;
  console.log('data: ', anime);

  return (
    <div className='container w-full mx-auto'>
      <section className='flex flex-col gap-4 w-full md:flex-row'>
        {/* Main Section  */}
        <main className='max-w-full flex flex-col flex-1'>
          <Video />
          <EpisodeList episodes={anime?.numberOfEpisode} />
          <AnimeContainer anime={anime} />
          <Comments />
          <SuggestedGrid />
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
