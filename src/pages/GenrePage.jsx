import React, { useCallback, useState } from 'react';
import { getAnimeByGenre, getGenres } from '../api/anilist';
import AnimeGrid from '../components/containers/AnimeGrid';
import { useAsync } from '../hooks/useAnime';

const GenrePage = () => {
  // AniList filters by genre name, not by id.
  const [genre, setGenre] = useState('Action');

  const fetchGenres = useCallback(() => getGenres(), []);
  const fetchByGenre = useCallback(() => getAnimeByGenre(genre), [genre]);

  const { data: genres } = useAsync(fetchGenres, []);
  const { data: anime, loading, error } = useAsync(fetchByGenre, [genre]);

  return (
    <section className='container'>
      <h2 className='my-6'>Genre: {genre}</h2>

      <ul className='flex flex-wrap gap-x-3 gap-y-1 mb-6 text-gray-400 text-sm'>
        {genres?.map((name) => (
          <li
            key={name}
            onClick={() => setGenre(name)}
            className={`cursor-pointer hover:text-white ${
              name === genre ? 'text-purple-500 font-semibold' : ''
            }`}
          >
            {name}
          </li>
        ))}
      </ul>

      <AnimeGrid
        items={anime}
        loading={loading}
        error={error}
        empty='No anime found in this genre.'
      />
    </section>
  );
};

export default GenrePage;
