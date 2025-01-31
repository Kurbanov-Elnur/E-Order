import profileImg from '../../Assets/Images/DefaultProfileImage.jpg';
import { AppDispatch, RootState } from '../../Store/Store';
import * as sidebarSlice from '../../Store/Reducers/SidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from "react-router-dom";
import './Sidebar.scss'

export default function Sidebar() {
    const sidebarState = useSelector((state: RootState) => state.Sidebar);
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();
    const { t } = useTranslation("common");

    const sideBarItems = [
        { name: t("Sidebar.Item-1"), path: '/search', iconClassName: 'bx bx-search' },
        { name: t("Sidebar.Item-2"), path: '/shopping-cart', iconClassName: 'bx bx-cart' },
        { name: t("Sidebar.Item-3"), path: '/order-history', iconClassName: 'bx bx-receipt' },
        { name: t("Sidebar.Item-4"), path: '/messages', iconClassName: 'bx bx-message-square-dots' },
        { name: t("Sidebar.Item-5"), path: '/promotions-announcements', iconClassName: 'bx bx-gift' },
        { name: t("Sidebar.Item-6"), path: '/about-brands', iconClassName: 'bx bx-store-alt' },
        { name: t("Sidebar.Item-7"), path: '/e-catalog', iconClassName: 'bx bx-book' },
        { name: t("Sidebar.Item-8"), path: '/information', iconClassName: 'bx bx-info-circle' },
        { name: t("Sidebar.Item-9"), path: '/outlet', iconClassName: 'bx bx-store' },
    ];

    // const filteredSideBarItems = authState.User?.Role !== 'AppAdmin'
    //     ? sideBarItems.filter(item => item.name !== "Admin Dashboard")
    //     : sideBarItems;

    return (
        <div className="sidebar-container">
            <div className={`sidebar ${sidebarState.isActive ? "expanded" : "collapsed"}`}>
                <div className="sidebar-header">
                    <div className={`sidebar-title ${sidebarState.isActive ? "show" : "hide"}`}>
                        <i className='bx bx-store-alt icon'></i>
                        <span>E-Sifariş</span>
                    </div>
                    <button
                        className={`toggle-btn ${sidebarState.isActive ? "expanded" : "collapsed"}`}
                        onClick={() => dispatch(sidebarSlice.setIsActive())}
                    >
                        <i className="bx bx-menu"></i>
                    </button>
                </div>
                <ul className="sidebar-menu">
                    {sideBarItems.map((item, index) => (
                        <li
                            key={index}
                            className={`menu-item`}
                        >
                            <Link to={`/app${item.path}`} className={`menu-link  ${location.pathname.startsWith('/app' + item.path) ? "active" : ""}`}>
                                <i className={`${item.iconClassName} menu-icon`}></i>
                                <span className={`menu-text ${sidebarState.isActive ? "show" : "hide"}`}>
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="sidebar-footer">
                    <img src={profileImg} alt="Profile" className="profile-img" />
                    <div className={`profile-info ${sidebarState.isActive ? "show" : "hide"}`}>
                        <p className="profile-name">Elnur Mamedov</p>
                        <p className="profile-role">Müştəri</p>
                    </div>
                    <Link to='/auth' className={`logout-btn ${sidebarState.isActive ? "show" : "hide"}`}>
                        <i className="bx bx-log-out"></i>
                    </Link>
                </div>
            </div>
            <div className={`main-content ${sidebarState.isActive ? "expanded" : "collapsed"}`}>
                <Outlet />
            </div>
        </div>
    );
}