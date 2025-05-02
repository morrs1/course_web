import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Загрузка из localStorage при монтировании
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorited(favorites.includes(product.id));
    }, [product.id]);

    // Обработка клика по кнопке
    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const index = favorites.indexOf(product.id);

        if (index === -1) {
            favorites.push(product.id); // Добавить в избранное
        } else {
            favorites.splice(index, 1); // Удалить из избранного
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorited(!isFavorited);
    };

    // Синхронизация между вкладками и компонентами
    useEffect(() => {
        const handleStorageChange = () => {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            setIsFavorited(favorites.includes(product.id));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [product.id]);

    return (
        <div className={styles.card}>
            <img src={`/images/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Категория: {product.category}</p>
            <p>Цена: {product.price} ₽</p>
            <p>Рейтинг: {product.rating} ★</p>
            <button
                className={`${styles.favoriteButton} ${isFavorited ? styles.active : ''}`}
                onClick={toggleFavorite}
            >
                {isFavorited ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
        </div>
    );
};

export default ProductCard;