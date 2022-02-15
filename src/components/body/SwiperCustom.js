import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const SwiperCustom = ({
  slidesperView,
  pagination,
  centeredSlides,
  spaceBetween,
  grabCursor,
  className,
  children,
}) => {
  SwiperCore.use(pagination ? [Pagination] : '');

  return (
    <Swiper
      slidesPerView={slidesperView || 'auto'}
      centeredSlides={centeredSlides || false}
      spaceBetween={spaceBetween || 30}
      grabCursor={grabCursor || false}
      pagination={
        pagination
          ? {
              clickable: true,
              dynamicBullets: true,
            }
          : ''
      }
      modules={pagination ? [Pagination] : ''}
      className={`slider-container ${className}`}
    >
      {children || (
        <>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </>
      )}
    </Swiper>
  );
};

export default SwiperCustom;
