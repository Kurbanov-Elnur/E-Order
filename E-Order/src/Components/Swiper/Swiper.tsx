import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Swiper.scss';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

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
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
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
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className='swiper-container'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}