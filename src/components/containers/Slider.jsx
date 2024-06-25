// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

import swiperData from '../../assets/data/swiperdata';
import SliderCard from '../cards/SliderCard';

export default function SliderComponent() {
  return (
    <>
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
        {swiperData.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <SliderCard image={e.image} title={e.name} heading={e.heading} />
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          <SliderCard image={onepiece} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
