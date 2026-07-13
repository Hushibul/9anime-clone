import React, { useCallback, useState } from 'react';
import { getAnimeByType } from '../api/anilist';
import AnimeGrid from '../components/containers/AnimeGrid';
import { useAsync } from '../hooks/useAnime';

// Left side is AniList's MediaFormat enum, right side is what we show.
const TYPES = [
  { format: 'TV', label: 'TV' },
  { format: 'MOVIE', label: 'Movie' },
  { format: 'OVA', label: 'OVA' },
  { format: 'ONA', label: 'ONA' },
  { format: 'SPECIAL', label: 'Special' },
  { format: 'MUSIC', label: 'Music' },
];

const TypePage = () => {
  const [type, setType] = useState(TYPES[0]);

  const fetchByType = useCallback(() => getAnimeByType(type.format), [type]);
  const { data: anime, loading, error } = useAsync(fetchByType, [type.format]);

  return (
    <section className='container'>
      <h2 className='my-6'>Types</h2>

      <ul className='flex flex-wrap items-center gap-x-4 mb-6 text-gray-400'>
        {TYPES.map((item) => (
          <li
            key={item.format}
            onClick={() => setType(item)}
            className={`cursor-pointer py-1 hover:text-white ${
              item.format === type.format
                ? 'text-purple-500 font-semibold'
                : ''
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <AnimeGrid
        items={anime}
        loading={loading}
        error={error}
        empty={`No ${type.label} anime found.`}
      />
    </section>
  );
};

export default TypePage;
