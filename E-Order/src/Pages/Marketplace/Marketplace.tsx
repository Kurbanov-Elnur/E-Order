import './Marketplace.scss'
import Swiper from '../../Components/Swiper/Swiper';

export default function Marketplace() {

  return (
    <div className='marketplace'>
      <div className="buttons-container">
        <button className="button green">
          <div className="icon">🛒</div>
          <div className="text">
            <strong>Sifarişlər səbəti</strong> <br />
            <span>0 AZN</span>
          </div>
        </button>

        <button className="button yellow">
          <div className="icon">📩</div>
          <div className="text">
            <strong>Məktublar</strong> <br />
            <span>0</span>
          </div>
        </button>

        <button className="button blue">
          <div className="icon">💰</div>
          <div className="text">
            <strong>Borcun miqdarı</strong> <br />
            <span>0 AZN</span>
          </div>
        </button>
      </div>

      <Swiper/>

      <div className="search-container">
        <i className='bx bx-search search-icon'></i>
        <div className="search-content">
          <h2>Nömrə üzrə axtarış</h2>
          <input type="text" placeholder="İstehsalçı və ya orijinal kodu daxil edin" />
          <button>Axtar</button>
        </div>
      </div>

      <div className='search-results'>

      </div>
    </div>
  )
}