import { forwardRef, useCallback, useEffect } from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FaBackward, FaForward, FaPlay } from 'react-icons/fa';
import { IoMdPause } from 'react-icons/io';

const VideoPlayer = forwardRef(
  (
    {
      src,
      type,
      isPlaying,
      setIsPlaying,
      currentTime,
      setCurrentTime,
      duration,
      setDuration,
    },
    ref
  ) => {
    const handlePlay = () => {
      if (isPlaying) {
        ref?.current.pause();
        setIsPlaying(false);
      } else {
        ref?.current.play();
        setIsPlaying(true);
      }
    };

    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedMinutes}:${returnedSeconds}`;
    };

    const handleTimeUpdate = useCallback(() => {
      if (ref.current) {
        setCurrentTime(ref.current.currentTime);
      }
    }, [ref, setCurrentTime]);

    const handleLoadedMetadata = useCallback(() => {
      if (ref.current) {
        setDuration(ref.current.duration);
      }
    }, [ref, setDuration]);

    const handleInputChange = (event) => {
      event.preventDefault();
      if (ref.current) {
        const newTime = Number(event.target.value);
        ref.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleForwardTime = () => {
      if (ref.current) {
        const newTime = Math.min(currentTime + 10, duration);
        ref.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleBackwardTime = () => {
      if (ref.current) {
        const newTime = Math.min(currentTime - 10, duration);
        ref.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };

    const handleFullScreen = () => {
      if (ref.current) {
        if (ref.current.requestFullscreen) {
          ref.current.requestFullscreen();
        } else if (ref.current.mozRequestFullScreen) {
          ref.current.mozRequestFullScreen(); // Firefox
        } else if (ref.current.webkitRequestFullscreen) {
          ref.current.webkitRequestFullscreen(); // Chrome, Safari, Opera
        } else if (ref.current.msRequestFullscreen) {
          ref.current.msRequestFullscreen(); // IE/Edge
        }
      }
    };

    useEffect(() => {
      const videoElement = ref.current;

      if (videoElement) {
        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      }

      return () => {
        if (videoElement) {
          videoElement.removeEventListener('timeupdate', handleTimeUpdate);
          videoElement.removeEventListener(
            'loadedmetadata',
            handleLoadedMetadata
          );
        }
      };
    }, [ref, handleLoadedMetadata, handleTimeUpdate]);

    return (
      <div className='relative'>
        <video id='video' ref={ref}>
          <source src={src} type={type} />
        </video>
        <div className='absolute bottom-8 left-2 video-player-range'>
          <input
            onChange={handleInputChange}
            type='range'
            className='w-full'
            value={currentTime}
            max={duration}
          />
        </div>
        <div className='w-[calc(100%-16px)] absolute bottom-2 left-4 flex items-center justify-between'>
          <div className='flex items-center gap-x-4'>
            <button onClick={handlePlay} className='bg-transparent'>
              {isPlaying ? <IoMdPause /> : <FaPlay />}
            </button>
            <button onClick={handleForwardTime} className='bg-transparent'>
              <FaForward size={20} />
            </button>
            <span className='text-white text-sm font-semibold'>
              {calculateTime(currentTime)} / {calculateTime(duration)}
            </span>
          </div>

          <div className='pr-4 flex items-center gap-x-4'>
            <button onClick={handleBackwardTime} className='bg-transparent'>
              <FaBackward size={20} />
            </button>
            <button onClick={handleForwardTime} className='bg-transparent'>
              <FaForward size={20} />
            </button>
            <button onClick={handleFullScreen} className='bg-transparent'>
              <BsArrowsFullscreen />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default VideoPlayer;
