import React from 'react';
import { NavBarItem, INav } from "../interface/INav";
import { Link } from "react-router-dom";
import Icon from './Icon';
import '../scss/components/NavBar.scss';

const NavBar: React.FC<INav> = ({ navContent }) => {
    const menu = navContent.menu;
    const logo = navContent.Logo;
    const imageSrc = logo ? "http://localhost:1337" + logo.data.attributes.url : '';
    const imageAlt = logo ? logo.data.attributes.name : '';

    return (
        <div className="nav-bar">
            <nav className="nav-bar__container w-full flex justify-between items-center px-5 py-3">
                <div className="nav-bar__logo-container flex items-center">
                    <img src={imageSrc} alt={imageAlt} className="nav-bar__logo h-28 mr-4 rounded-full" />
                    <Link to="/" className="nav-bar__title text-white font-bold text-s">
                        Le Bistrot Gourmand
                    </Link>
                </div>
                <div className="nav-bar__menu flex items-center">
                    {menu.map((item: NavBarItem) => (
                        item.isExternallink ? (
                            <a key={item.id} href={item.Slug} className="nav-bar__menu-item text-white mx-5 relative flex items-center" target='_blanc'>
                                {item.Icon && <Icon name={item.Icon} className={`nav-bar__menu-icon ${item.Label ? 'mr-2' : ''} h-4 w-4`} />}
                                {item.Label}
                                <div className="nav-bar__menu-indicator w-0 bg-white h-0.5 absolute bottom-0 left-0"></div>
                            </a>
                        ) : (
                            <Link key={item.id} to={item.Slug} className="nav-bar__menu-item text-white mx-5 relative flex items-center">
                                {item.Icon && <Icon name={item.Icon} className={`nav-bar__menu-icon ${item.Label ? 'mr-2' : ''} h-4 w-4`} />}
                                {item.Label}
                                <div className="nav-bar__menu-indicator w-0 bg-white h-0.5 absolute bottom-0 left-0"></div>
                            </Link>
                        )
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
