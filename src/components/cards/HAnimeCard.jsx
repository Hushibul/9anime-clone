const HAnimeCard = ({ name, image, numOfEpisode, type, dateAired }) => {
  return (
    <div className='flex bg-neutral-900 items-center rounded-lg overflow-hidden my-2 group'>
      <img
        src={image}
        alt='img'
        className='h-16 mr-6 group-hover:scale-110 duration-300 rounded'
      />
      <div className='flex flex-col mx-2 py-2'>
        <h4 className='text-sm text-gray-200'>{name}</h4>

        <div className='flex my-1 items-center'>
          <div className='items-center flex '>
            <span className='text-[9px] bg-white p-1 rounded text-purple-600 font-semibold mr-1'>
              cc
            </span>
            <span className='text-[10px] p-1 rounded text-white bg-purple-600'>
              {numOfEpisode ? numOfEpisode : 'TBA'}
            </span>
          </div>
          <p className='text-xs text-gray-500 mx-1 py-1'>.</p>
          <p className='text-xs text-gray-500 mx-1 py-1'>{type}</p>
          <p className='text-xs text-gray-500 mx-1 py-1'>.</p>
          <p className='text-xs text-gray-500 mx-1 py-1'>{dateAired}</p>
        </div>
      </div>
    </div>
  );
};

export default HAnimeCard;
