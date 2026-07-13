import React, { Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getRecommendations } from '../../api/anilist';
import { AnimeContext } from '../../contexts/AnimeContext';
import { useAsync } from '../../hooks/useAnime';

import AnimeCard from '../cards/AnimeCard';

const Message = ({ children }) => (
  <h5 className='text-white font-semibold text-2xl text-center my-4'>
    {children}
  </h5>
);

// Given an animeId, this shows what AniList users recommend to people who
// watched that title. Without one (e.g. on a listing page) it falls back to
// the popular list already in context.
const SuggestedGrid = ({ animeId }) => {
  const { animeData, loading: contextLoading } = useContext(AnimeContext);

  const fetchRecommendations = useCallback(
    () => getRecommendations(animeId),
    [animeId]
  );

  const { data: recommendations, loading: recommendationsLoading } = useAsync(
    fetchRecommendations,
    [animeId],
    { skip: !animeId }
  );

  const usingRecommendations = Boolean(animeId) && recommendations?.length > 0;

  const suggested = usingRecommendations
    ? recommendations
    : animeData?.suggested;

  const loading = animeId ? recommendationsLoading : contextLoading;

  if (loading) return <Message>Loading...</Message>;

  if (!suggested?.length) {
    return <Message>No suggested anime available.</Message>;
  }

  return (
    <Fragment>
      <div className='flex flex-col md:flex-row justify-between'>
        <h2 className='mx-2 mb-5'>
          {usingRecommendations ? 'You might also like' : 'Suggested'}
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-6'>
        {suggested.map((e) => (
          <Link key={e.id} to={`/watch/${e.id}`}>
            <AnimeCard
              name={e.name}
              image={e.image}
              type={e.type}
              numOfEpisode={e.numberOfEpisode}
            />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SuggestedGrid;
