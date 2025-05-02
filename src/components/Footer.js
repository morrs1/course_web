import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; 2025 VelosipedShop. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;