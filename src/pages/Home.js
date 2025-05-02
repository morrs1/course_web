import React from 'react';
import styles from '../styles/App.module.css';

const Home = () => {
    return (
        <div className={styles.page}>
            <h1>Добро пожаловать в VelosipedShop</h1>
            <p>Ваш надежный партнер в мире велосипедов</p>
        </div>
    );
};

export default Home;