import React from "react";

import './index.css'
import logo from '../../assets/images/space_x_logo.png'

function Header() {
    return (
        <header>
            <div className='wrapper header__wrapper'>
                <div className="header__logo-img">
                    <div className="header__logo-img__border-block1"></div>
                    <div className="header__logo-img__border-block2"></div>
                    <div className="header__logo-img__border-block3"></div>
                    <img src={logo} alt="#" />
                </div>
                <nav className="header__nav">
                    <ul>
                        <li>Главная</li>
                        <li>Технология</li>
                        <li>График полетов</li>
                        <li>Гарантии</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header