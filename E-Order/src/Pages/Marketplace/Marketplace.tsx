import './Marketplace.scss';
import Swiper from '../../Components/Swiper/Swiper';
import { useState } from 'react';
import React from 'react';
import MainButtons from '../../Components/MainButtons/MainButtons';

interface Product {
  brand: string;
  code: string;
  name: string;
  car: string;
  originalCode: string;
  status: string;
  quantity: number;
  priceAZN: string;
  priceUSD: string;
  alternatives?: Product[];
}

const products: Product[] = [
  {
    brand: 'Misal Məhsul',
    code: '12345',
    name: 'Avtomobil yağı',
    car: 'Opel Astra',
    originalCode: 'OP12345',
    status: 'Aktiv',
    quantity: 5,
    priceAZN: '25 AZN',
    priceUSD: '15 USD',
    alternatives: [
      {
        brand: 'Misal Məhsul',
        code: '54321',
        name: 'Avtomobil yağı',
        car: 'BMW 3 Series',
        originalCode: 'OP54321',
        status: 'Aktiv',
        quantity: 2,
        priceAZN: '30 AZN',
        priceUSD: '18 USD',
      },
    ],
  },
  {
    brand: 'Qlobal Brend',
    code: '98765',
    name: 'Şarj cihazı',
    car: 'BMW 3 Series',
    originalCode: 'BC98765',
    status: 'Aktiv',
    quantity: 10,
    priceAZN: '40 AZN',
    priceUSD: '24 USD',
    alternatives: [
      {
        brand: 'Misal Məhsul',
        code: '54321',
        name: 'Avtomobil yağı',
        car: 'BMW 3 Series',
        originalCode: 'OP54321',
        status: 'Aktiv',
        quantity: 2,
        priceAZN: '30 AZN',
        priceUSD: '18 USD',
      },
    ],
  },
];

const options = [
  { value: '', label: 'Seçin' },
  { value: 'Misal Məhsul', label: 'Misal Məhsul' },
  { value: 'Qlobal Brend', label: 'Qlobal Brend' },
  { value: 'Yerli Brend', label: 'Yerli Brend' }
];

export default function Marketplace() {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalAZN, setTotalAZN] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectAll, setSelectAll] = useState(false);

  const toggleAlternative = (code: string) => {
    setExpandedRows((prev) =>
      prev.includes(code) ? prev.filter((row) => row !== code) : [...prev, code]
    );
  };

  const handleQuantityChange = (product: Product, newQuantity: number) => {
    const updatedQuantities = { ...quantities, [product.code]: newQuantity };
    setQuantities(updatedQuantities);
    calculateTotals(updatedQuantities);
  };

  const calculateTotals = (updatedQuantities: { [key: string]: number }) => {
    let aznTotal = 0;
    let usdTotal = 0;
    let totalCount = 0;

    products.forEach((product) => {
      const quantity = updatedQuantities[product.code] || product.quantity;
      aznTotal += parseFloat(product.priceAZN.replace(' AZN', '')) * quantity;
      usdTotal += parseFloat(product.priceUSD.replace(' USD', '')) * quantity;
      totalCount += quantity;

      if (product.alternatives) {
        product.alternatives.forEach((altProduct) => {
          const altQuantity = updatedQuantities[altProduct.code] || altProduct.quantity;
          aznTotal += parseFloat(altProduct.priceAZN.replace(' AZN', '')) * altQuantity;
          usdTotal += parseFloat(altProduct.priceUSD.replace(' USD', '')) * altQuantity;
          totalCount += altQuantity;
        });
      }
    });

    setTotalAZN(aznTotal);
    setTotalUSD(usdTotal);
    setTotalQuantity(totalCount);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    products.forEach((product) => {
      const checkbox = document.getElementById(`select-${product.code}`) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !selectAll;
      }
    });
  };

  return (
    <div className='marketplace'>
      <MainButtons />
      <Swiper />
      <div className='search-container'>
        <h2>Nömrə və brend üzrə axtarış</h2>
        <div className='selects-container'>
          {options.map((_, index) => (
            <div className='select-container' key={index}>
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
          ))}
        </div>
        <div className='search'>
          <input type='text' placeholder='İstehsalçı və ya orijinal kodu daxil edin' />
          <button>Axtar</button>
        </div>
        <h3>Axtarış nəticələri</h3>
        <div className='results-table'>
          <table>
            <thead>
              <tr>
                <th>İstehsalçı (Brend)</th>
                <th>İstehsalçı Kodu</th>
                <th>Məhsulun adı</th>
                <th>Avto</th>
                <th>Məhsulun orijinal kodu</th>
                <th>Status</th>
                <th>Miqdar</th>
                <th>Ədəd qiyməti(AZN)</th>
                <th>Ədəd qiyməti(USD)</th>
                <th>Alternativlər</th>
                <th>Seç</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <React.Fragment key={product.code}>
                  <tr>
                    <td>{product.brand}</td>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.car}</td>
                    <td>{product.originalCode}</td>
                    <td>{product.status}</td>
                    <td>
                      <input
                        type='number'
                        min='0'
                        value={quantities[product.code] || product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(product, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>{product.priceAZN}</td>
                    <td>{product.priceUSD}</td>
                    <td>
                      {product.alternatives && (
                        <i
                          onClick={() => toggleAlternative(product.code)}
                          style={{ color: expandedRows.includes(product.code) ? '#4CAF50' : '#E53935' }}
                          className={
                            expandedRows.includes(product.code)
                              ? 'icon bx bx-chevron-up-circle'
                              : 'icon bx bx-chevron-down-circle'
                          }
                        ></i>
                      )}
                    </td>
                    <td>
                      <input
                        type='checkbox'
                        id={`select-${product.code}`}
                        className='select-checkbox'
                      />
                      <label htmlFor={`select-${product.code}`}>
                        <i className='bx bx-check-circle'></i>
                      </label>
                    </td>
                  </tr>
                  {expandedRows.includes(product.code) &&
                    product.alternatives &&
                    product.alternatives.map((altProduct) => (
                      <tr
                        key={altProduct.code}
                        style={{
                          backgroundColor: '#ffe6e6',
                          borderTop: '2px solid #ccc',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        <td>{altProduct.brand}</td>
                        <td>{altProduct.code}</td>
                        <td>{altProduct.name}</td>
                        <td>{altProduct.car}</td>
                        <td>{altProduct.originalCode}</td>
                        <td>{altProduct.status}</td>
                        <td>
                          <input
                            type='number'
                            min='0'
                            value={quantities[altProduct.code] || altProduct.quantity}
                            onChange={(e) =>
                              handleQuantityChange(altProduct, parseInt(e.target.value))
                            }
                          />
                        </td>
                        <td>{altProduct.priceAZN}</td>
                        <td>{altProduct.priceUSD}</td>
                        <td></td>
                        <td>
                          <input
                            type='checkbox'
                            id={`select-${altProduct.code}`}
                            className='select-checkbox'
                          />
                          <label htmlFor={`select-${altProduct.code}`}>
                            <i className='bx bx-check-circle'></i>
                          </label>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
              <tr className='sticky-footer'>
                <td colSpan={6}></td>
                <td><strong>Total (Miqdar): {totalQuantity}</strong></td>
                <td><strong>Total (AZN): {totalAZN.toFixed(2)}</strong></td>
                <td><strong>Total (USD): {totalUSD.toFixed(2)}</strong></td>
                <td><button>Səbətə at</button></td>
                <td>
                  <i
                    className={`bx ${selectAll ? 'bx-check-circle' : 'bx-circle'}`}
                    onClick={toggleSelectAll}
                    style={{ color: `${selectAll ? 'green' : 'red'}` }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}