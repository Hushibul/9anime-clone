// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../../contexts/AnimeContext';
import SliderCard from '../cards/SliderCard';

export default function SliderComponent() {
  const { animeData, loading } = useContext(AnimeContext);

  // Feature what's actually airing this season, falling back to the top list
  // early in the season when it's thin.
  const featured = (
    animeData?.newRelease?.length ? animeData.newRelease : animeData?.recentlyUpdate
  )?.slice(0, 5);

  if (loading || !featured?.length) {
    return (
      <div className='h-[320px] md:h-[500px] flex items-center justify-center'>
        <h5 className='text-white font-semibold text-2xl'>Loading...</h5>
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {featured.map((anime) => (
        <SwiperSlide key={anime.id}>
          <Link to={`/watch/${anime.id}`}>
            <SliderCard
              image={anime.image}
              title={anime.name}
              heading={anime.description}
              rating={anime.rating}
              dateAired={anime.dateAired}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
