import './Header.scss';

import { AppDispatch, RootState } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import * as sidebarSlice from '../../Store/Reducers/SidebarSlice';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const dispatch = useDispatch<AppDispatch>();
    const sidebarState = useSelector((state: RootState) => state.Sidebar);
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className='header'>
            <div className="profile-info">
                <div className={'title'}>
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
            <div className="language-switcher">
                <button onClick={() => changeLanguage('EN')}>EN</button>
                <button onClick={() => changeLanguage('AZ')}>AZ</button>
                <button onClick={() => changeLanguage('RU')}>RU</button>
            </div>
        </div>
    )
}