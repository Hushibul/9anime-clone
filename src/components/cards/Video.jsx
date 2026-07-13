import { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube';

// Jikan is a metadata API — it has no episode streams, so there is nothing
// legitimate to stream here. What it does expose is each title's official
// YouTube PV, which is what we play.
const Video = ({ anime, episode }) => {
  const [lightsOff, setLightsOff] = useState(false);

  return (
    <div className='mx-2 my-6 flex flex-col'>
      <div className='relative aspect-video bg-black rounded overflow-hidden'>
        {anime?.trailerUrl ? (
          <ReactPlayer
            url={anime.trailerUrl}
            controls
            width='100%'
            height='100%'
            config={{ youtube: { playerVars: { modestbranding: 1 } } }}
          />
        ) : (
          <div className='w-full h-full flex flex-col gap-2 items-center justify-center text-center px-4'>
            <BsFillPlayCircleFill className='text-gray-600 text-5xl' />
            <p className='text-gray-400 text-sm'>
              No official trailer available for {anime?.name || 'this title'}.
            </p>
          </div>
        )}
      </div>

      <section className='px-2 flex py-1 bg-black justify-between'>
        <div className='flex'>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Auto Play
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Auto Next
          </p>
          <p
            onClick={() => setLightsOff((previous) => !previous)}
            className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'
          >
            {lightsOff ? 'Lights On' : 'Light'}
          </p>
        </div>
        <div className='flex mx-1'>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Report
          </p>
          <p className='text-gray-400 hover:text-white cursor-pointer text-[10px] px-1'>
            Add to List
          </p>
        </div>
      </section>

      <section className='py-3'>
        <p className='text-xs text-gray-400 text-center'>
          Showing the official trailer for{' '}
          <span className='text-purple-600 font-medium'>{anime?.name}</span>
          {episode ? (
            <>
              {' '}
              — you selected{' '}
              <span className='text-purple-600 font-medium'>
                Episode {episode}
              </span>
              .
            </>
          ) : null}{' '}
          Episode streams are not part of this project.
        </p>
      </section>

      <section className='px-2 py-2 flex bg-black items-center gap-2 flex-wrap'>
        <div className='flex gap-2 items-center mr-6'>
          <p className='text-[8px] bg-gray-400 p-1 font-bold text-black rounded-sm'>
            CC
          </p>
          <p className='text-gray-400'>Sub</p>
        </div>
        <div className='text-xs px-2 flex py-2 gap-1 rounded items-center text-white bg-purple-600'>
          <BsFillPlayCircleFill />
          <p className='text-white'>Official Trailer</p>
        </div>
        <p className='text-[10px] text-gray-500'>
          Score {anime?.score} · {anime?.type} · {anime?.status}
        </p>
      </section>

      {lightsOff && (
        <div
          onClick={() => setLightsOff(false)}
          className='fixed inset-0 bg-black/80 z-0 cursor-pointer'
        />
      )}
    </div>
  );
};

export default Video;
