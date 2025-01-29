import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher'
import './Marketplace.scss'

export default function Marketplace() {
  
  return (
    <div className='marketplace'>
      <LanguageSwitcher />

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