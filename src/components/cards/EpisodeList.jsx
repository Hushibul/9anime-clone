import { Fragment, useState } from 'react';

const EpisodeList = ({
  episodes,
  loading,
  totalEpisodes,
  selectedEpisode,
  onSelect,
}) => {
  const [filter, setFilter] = useState('');

  // Jikan only lists episodes for shows that have already aired. For anything
  // still upcoming (or a movie) fall back to a numbered list from the count.
  const list =
    episodes?.length > 0
      ? episodes
      : Array.from({ length: Number(totalEpisodes) || 0 }, (_, index) => ({
          id: index + 1,
          number: index + 1,
          title: `Episode ${index + 1}`,
        }));

  const visible = list.filter((episode) =>
    filter ? String(episode.number).includes(filter.trim()) : true
  );

  return (
    <Fragment>
      <section className='mx-2 mt-2 flex gap-x-2'>
        <div className='px-2 text-[10px] text-gray-400 bg-black py-1'>
          Sub & Dub
        </div>
        <div className='px-2 text-[10px] text-gray-400 bg-black py-1'>
          {list.length > 0 ? `1-${list.length}` : '—'}
        </div>
        <input
          className='px-3 text-[10px] placeholder:text-gray-400 bg-black text-gray-400 py-1 focus:outline-none rounded focus:outline-gray-400'
          placeholder='Episode Number'
          type='text'
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </section>

      <section className='mx-2 flex flex-col my-2 max-h-96 overflow-y-scroll'>
        {loading && <p className='px-2 py-2 text-gray-400'>Loading episodes…</p>}

        {!loading && list.length === 0 && (
          <p className='px-2 py-2 text-gray-400'>
            No episode list available for this title.
          </p>
        )}

        {!loading &&
          visible.map((episode, index) => (
            <button
              key={episode.id}
              onClick={() => onSelect?.(episode.number)}
              className={`px-2 py-2 text-left cursor-pointer flex justify-between items-center gap-2 ${
                selectedEpisode === episode.number
                  ? 'bg-purple-700 text-white'
                  : `hover:bg-gray-700 ${
                      index % 2 === 0 ? 'bg-[#0e0e0e]' : 'bg-black'
                    }`
              }`}
            >
              <span className='truncate'>
                <span className='text-gray-400 mr-2'>Ep {episode.number}</span>
                {episode.title}
              </span>
              {episode.filler && (
                <span className='text-[9px] shrink-0 bg-yellow-600 text-black px-1 rounded-sm font-semibold'>
                  FILLER
                </span>
              )}
            </button>
          ))}
      </section>
    </Fragment>
  );
};

export default EpisodeList;
