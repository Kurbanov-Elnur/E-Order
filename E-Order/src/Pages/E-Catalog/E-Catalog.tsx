import MainButtons from '../../Components/MainButtons/MainButtons';
import './E-Catalog.scss';

import foto1 from '../../Assets/Brands/Brand-1.jpg';
import foto2 from '../../Assets/Brands/Brand-2.jpg';
import foto3 from '../../Assets/Brands/Brand-3.jpg';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

const images: string[] = [foto1, foto2, foto3];
const options = [
    { value: '', label: 'Seçin' },
    { value: 'Misal Məhsul', label: 'Misal Məhsul' },
    { value: 'Qlobal Brend', label: 'Qlobal Brend' },
    { value: 'Yerli Brend', label: 'Yerli Brend' }
];

export default function ECatalog() {
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    return (
        <div className='e-catalog'>
            <MainButtons />
            <div className='e-catalog-container'>
                <h2>E Catalog</h2>
                <div style={{ display: 'flex' }}>
                    <Swiper
                        grabCursor={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className='swiper-container'
                        modules={[Navigation]}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className='slide'>
                                <img src={image} alt={`slide ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Swiper>
                    <div className='select-container'>
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className='custom-select'
                        >
                            {options.map((option, optionIndex) => (
                                <option key={optionIndex} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <i className='bx bx-chevron-down'></i>
                    </div>
                </div>
                <div className='iframe-container'>
                    <iframe
                        src="https://www.tecalliance.net/"
                        title="TecAlliance"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', borderRadius: '20px' }}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}