import React, { useContext } from 'react';
import AnimeGrid from '../components/containers/AnimeGrid';
import { AnimeContext } from '../contexts/AnimeContext';

const UpdatedPage = () => {
  const { animeData, loading, error } = useContext(AnimeContext);

  return (
    <section className='container'>
      <h2 className='my-6'>Recently Updated</h2>
      <AnimeGrid
        items={animeData?.recentlyUpdate}
        loading={loading}
        error={error}
      />
    </section>
  );
};

export default UpdatedPage;
