import { Fragment } from 'react';

const EpisodeList = ({ episodes }) => {
  const episodeList = [];

  for (let i = 1; i <= episodes; i++) {
    episodeList.push(i);
  }

  return (
    <Fragment>
      <section className='mx-2 mt-2 flex gap-x-2'>
        <div className='px-2 text-[10px] text-gray-400 bg-black py-1'>
          Sub & Dub
        </div>
        <div className='px-2 text-[10px] text-gray-400 bg-black py-1'>
          1-{episodes}
        </div>
        <input
          className='px-3 text-[10px] placeholder:text-gray-400 bg-black text-gray-400 py-1 focus:outline-none rounded focus:outline-gray-400'
          placeholder='Episode Number'
          type='text'
        />
      </section>
      <section className='mx-2 flex flex-col my-2 max-h-96 overflow-y-scroll'>
        {episodes &&
          episodeList.map((item) => (
            <p
              key={item}
              className={`px-2 py-2 hover:bg-gray-300 cursor-pointer ${
                item % 2 === 0 ? 'bg-[#0e0e0e]' : 'bg-black'
              }`}
            >
              Episode {item}
            </p>
          ))}
      </section>
    </Fragment>
  );
};

export default EpisodeList;
