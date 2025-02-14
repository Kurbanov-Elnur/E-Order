import './OrderHistory.scss';
import React from 'react';

interface Product {
    brand: string;
    code: string;
    name: string;
    car: string;
    originalCode: string;
}

const products: Product[] = [
    {
        brand: 'Misal Məhsul',
        code: '12345',
        name: 'Avtomobil yağı',
        car: 'Opel Astra',
        originalCode: 'OP12345',
    },
    {
        brand: 'Qlobal Brend',
        code: '98765',
        name: 'Şarj cihazı',
        car: 'BMW 3 Series',
        originalCode: 'BC98765',
    },
];

export default function OrderHistory() {
    return (
        <div className='order-history'>
            <div className='search-container'>
                <h2>Sifariş tarixçəsi</h2>
                <div className='search'>
                    <input type='text' placeholder='Nəticə üzrə axtarış' />
                    <button>Axtar</button>
                </div>
                <h3>Axtarış nəticələri</h3>
                <div className='results-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarix</th>
                                <th>Miqdar</th>
                                <th>Qiymət(AZN)</th>
                                <th>Qiymət(USD)</th>
                                <th>Məzənnə</th>
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
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}