import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="Логотип"/>
                    <h1>VelosipedShop</h1>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/products">Продукция</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;