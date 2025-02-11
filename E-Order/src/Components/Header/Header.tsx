import './Header.scss';

import { AppDispatch, RootState } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import * as sidebarSlice from '../../Store/Reducers/SidebarSlice';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
    const dispatch = useDispatch<AppDispatch>();
    const sidebarState = useSelector((state: RootState) => state.Sidebar);
    const { i18n } = useTranslation();

    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const languageMenuRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lang: string) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
        setIsLanguageMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                <i className='bx bx-world' onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}></i>
                {isLanguageMenuOpen && (
                    <div ref={languageMenuRef} className="language-dropdown">
                        <button onClick={() => changeLanguage('EN')}>English</button>
                        <button onClick={() => changeLanguage('RU')}>Русский</button>
                        <button onClick={() => changeLanguage('AZ')}>Azərbaycan</button>
                    </div>
                )}
            </div>
        </div>
    )
}