import './ShoppingCart.scss';
import { useState } from 'react';
import React from 'react';

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
  },
];

export default function ShoppingCart() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [totalAZN, setTotalAZN] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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

  return (
    <div className='shopping-cart'>
      <div className='search-container'>
        <h2>Sifarişlər səbəti</h2>
        <div className='search'>
          <input type='text' placeholder='Nəticə üzrə axtarış' />
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
                <th>Səbətdən silmək</th>
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
                    <td><i className='bx bx-trash' style={{ color: 'red', fontSize: '20px' }}></i></td>
                  </tr>
                </React.Fragment>
              ))}
              <tr className="sticky-footer">
                <td colSpan={2}><button style={{ backgroundColor: 'red' }}>Səbəti təmizlə</button></td>
                <td><button>Sifariş et</button></td>
                <td colSpan={3}></td>
                <td><strong>Total (Miqdar): {totalQuantity}</strong></td>
                <td><strong>Total (AZN): {totalAZN.toFixed(2)}</strong></td>
                <td><strong>Total (USD): {totalUSD.toFixed(2)}</strong></td>
                <td>
                  <i
                    className='bx bx-trash'
                    style={{ color: 'red' }}
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