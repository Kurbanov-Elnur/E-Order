import "./Brands.scss";
import brand1 from '../../Assets/Brands/Brand-1.jpg';
import brand2 from '../../Assets/Brands/Brand-2.jpg';
import brand3 from '../../Assets/Brands/Brand-3.jpg';

const brandData = [
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
    { name: "Nike", logo: brand1 },
    { name: "Adidas", logo: brand2 },
    { name: "Puma", logo: brand3 },
];

export default function Brands() {
    return (
        <div className="brands">
            <h2>Brands</h2>
            <div className="brands-container">
                {brandData.map((brand, index) => (
                    <div key={index} className="brand-card">
                        <img src={brand.logo} alt={brand.name} />
                        <div className="brand-info">
                            <h3>{brand.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}