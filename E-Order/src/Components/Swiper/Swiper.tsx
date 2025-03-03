import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Swiper.scss';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import ADS1 from '../../Assets/ADS/ADS-1.jpg';
import ADS2 from '../../Assets/ADS/ADS-2.jpg';
import ADS3 from '../../Assets/ADS/ADS-3.jpg';
import ADS4 from '../../Assets/ADS/ADS-4.jpg';
import ADS5 from '../../Assets/ADS/ADS-5.png';

const images: string[] = [ADS1, ADS2, ADS3, ADS4, ADS5];

export default function MySwiper() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className='toggle-button' onClick={toggleVisibility}>Aksiyalar və elanları göstər</button>
      <div className={`swiper ${!isVisible ? 'hidden' : ''}`} style={{ userSelect: 'none' }}>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className='swiper-container'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}