import React from 'react';
import styles from '../styles/App.module.css';

const About = () => {
    return (
        <div className={styles.page}>
            <h1>О нас</h1>
            <p>VelosipedShop - это интернет-магазин, предлагающий широкий ассортимент велосипедов различных типов.</p>
            <p>Мы работаем с 2015 года и заботимся о качестве продукции и обслуживании клиентов.</p>
        </div>
    );
};

export default About;