import './PromotionsAnnouncements.scss';
import foto1 from '../../Assets/ADS/ADS-1.jpg';
import foto2 from '../../Assets/ADS/ADS-2.jpg';
import foto3 from '../../Assets/ADS/ADS-3.jpg';
import foto4 from '../../Assets/ADS/ADS-4.jpg';
import foto5 from '../../Assets/ADS/ADS-5.png';
import MainButtons from '../../Components/MainButtons/MainButtons';
import { useEffect, useState } from 'react';

interface Promotion {
    id: number;
    image: string;
    date: string;
    title: string;
}

const promotions: Promotion[] = [
    {
        id: 1,
        image: foto1,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 2,
        image: foto2,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 3,
        image: foto3,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 4,
        image: foto4,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 5,
        image: foto5,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 6,
        image: foto5,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 7,
        image: foto5,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
    {
        id: 8,
        image: foto5,
        date: '18.02.2025-25.02.2025',
        title: 'Qarşılayın!',
    },
];

export default function PromotionsAnnouncements() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(2);
            } else if (window.innerWidth <= 1200) {
                setItemsPerPage(4);
                setItemsPerPage(6);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPromotions = promotions.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(promotions.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='promotions-announcements'>
            <MainButtons />
            <div className='promotion-announcement-container'>
                {currentPromotions.map((promotion) => (
                    <div key={promotion.id} className='promotion-announcement'>
                        <img src={promotion.image} className='foto' alt={promotion.title}></img>
                        <div className='content'>
                            <div>
                                <span className='date'>{promotion.date}</span>
                                <h1 className='title'>{promotion.title}</h1>
                            </div>
                            <button className='more-info'>Ətarflı</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pagination'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Назад
                </button>
                <span>
                    Страница {currentPage} из {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Вперед
                </button>
            </div>
        </div>
    );
}