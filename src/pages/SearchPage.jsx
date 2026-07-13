import React, { useCallback, useContext } from 'react';
import { searchAnime } from '../api/anilist';
import AnimeGrid from '../components/containers/AnimeGrid';
import { LoginContext } from '../contexts/LoginContext';
import { useAsync, useDebounced } from '../hooks/useAnime';

const SearchPage = () => {
  const { query } = useContext(LoginContext);

  // Debounced so typing doesn't fire a request per keystroke and trip the
  // rate limit.
  const debouncedQuery = useDebounced(query, 500);
  const term = debouncedQuery.trim();

  const fetchResults = useCallback(() => searchAnime(term), [term]);
  const {
    data: results,
    loading,
    error,
  } = useAsync(fetchResults, [term], { skip: term.length < 3 });

  return (
    <section className='container'>
      <h2 className='my-6'>
        {term ? `Search results for "${term}"` : 'Search'}
      </h2>

      {term.length < 3 ? (
        <h5 className='text-gray-400 text-center my-4'>
          Type at least 3 characters in the search box to look up an anime.
        </h5>
      ) : (
        <AnimeGrid
          items={results}
          loading={loading}
          error={error}
          empty={`Nothing matched "${term}".`}
        />
      )}
    </section>
  );
};

export default SearchPage;
