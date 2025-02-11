import './Marketplace.scss';
import Swiper from '../../Components/Swiper/Swiper';

export default function Marketplace() {
  return (
    <div className='marketplace'>SDFG 
      <div className="buttons-container">

      </div>

      <Swiper />

      <div className="search-container">
        <i className='bx bx-search search-icon'></i>
        <div className="search-content">
          <h2>Nömrə üzrə axtarış</h2>
          <input type="text" placeholder="İstehsalçı və ya orijinal kodu daxil edin" />
          <button>Axtar</button>
        </div>
      </div>

      <div className='search-results'>
        <h2>Axtarış nəticələri</h2>
        <input type="text" placeholder="Nəticə üzrə axtarış:" className="search-filter" />
      </div>
    </div>
  );
}