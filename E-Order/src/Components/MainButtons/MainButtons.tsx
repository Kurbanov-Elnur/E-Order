import "./MainButtons.scss";

export default function MainButtons() {
    return (
        <div className="main-buttons">
            <div className="card">
                <div className="icon" style={{ backgroundColor: "#4CAF50" }}>
                    <i className='bx bx-cart'></i>
                </div>
                <div className="content">
                    <p className="title">Сумма заказов</p>
                    <h2>94.92 AZN</h2>
                    <span className="currency">55.84 $</span>
                </div>
            </div>
            <div className="card due">
                <div className="icon" style={{ backgroundColor: "#03A9F4" }}>
                    <i className='bx bx-coin-stack'></i>
                </div>
                <div className="content">
                    <p className="title">Долг</p>
                    <h2>0 AZN</h2>
                    <span className="currency">0 $</span>
                </div>
            </div>
            <div className="small-card">
                <div className="icon" style={{ backgroundColor: "#FF9800" }}>
                    <i className='bx bx-envelope'></i>
                    <span className="badge">0</span>
                </div>
            </div>
            <div className="small-card">
                <div className="icon" style={{ backgroundColor: "#E91E63" }}>
                    <i className='bx bx-heart'></i>
                    <span className="badge">7</span>
                </div>
            </div>
        </div>
    );
}