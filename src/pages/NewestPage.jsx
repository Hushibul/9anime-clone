import React, { useContext } from 'react';
import AnimeGrid from '../components/containers/AnimeGrid';
import { AnimeContext } from '../contexts/AnimeContext';

const NewestPage = () => {
  const { animeData, loading, error } = useContext(AnimeContext);

  return (
    <section className='container'>
      <h2 className='my-6'>Newest — airing this season</h2>
      <AnimeGrid
        items={animeData?.newRelease}
        loading={loading}
        error={error}
      />
    </section>
  );
};

export default NewestPage;
