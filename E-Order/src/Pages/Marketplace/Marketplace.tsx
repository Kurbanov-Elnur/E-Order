import './Marketplace.scss';
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
        <table className='results-table'>
          <thead>
            <tr>
              <th>İstehsalçı (Brend)</th>
              <th>İstehsalçı Kodu</th>
              <th>Məhsulun Adı</th>
              <th>Avto</th>
              <th>Məhsulun Orijinal Kodu</th>
              <th>Status</th>
              <th>Miqdar</th>
              <th>Ədəd Qiyməti (AZN)</th>
              <th>Ədəd Qiyməti (USD)</th>
              <th>Seç</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brend1</td>
              <td>001</td>
              <td>Məhsul 1</td>
              <td>Avto 1</td>
              <td>AB123</td>
              <td>Aktiv</td>
              <td>
                <input type="number" placeholder="Miqdar" min="0" />
              </td>
              <td>50 AZN</td>
              <td>30 USD</td>
              <td>
                <input type="checkbox" id="select1" className="select-checkbox" />
                <label htmlFor="select1">
                  <i className="bx bx-check-circle"></i>
                </label>
              </td>
            </tr>
            <tr>
              <td>Brend2</td>
              <td>002</td>
              <td>Məhsul 2</td>
              <td>Avto 2</td>
              <td>CD456</td>
              <td>Pasif</td>
              <td>
                <input type="number" placeholder="Miqdar" min="0" />
              </td>
              <td>40 AZN</td>
              <td>24 USD</td>
              <td>
                <input type="checkbox" id="select1" className="select-checkbox" />
                <label htmlFor="select1">
                  <i className="bx bx-check-circle"></i>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="add-to-cart">
          <button>Əlavə et</button>
        </div> */}
      </div>
    </div>
  );
}