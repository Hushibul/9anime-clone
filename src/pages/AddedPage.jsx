import React, { useContext } from 'react';
import AnimeGrid from '../components/containers/AnimeGrid';
import { AnimeContext } from '../contexts/AnimeContext';

const AddedPage = () => {
  const { animeData, loading, error } = useContext(AnimeContext);

  return (
    <section className='container'>
      <h2 className='my-6'>Added — upcoming season</h2>
      <AnimeGrid items={animeData?.newAdded} loading={loading} error={error} />
    </section>
  );
};

export default AddedPage;
