import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Products.module.css';

const Products = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState('price');
    const [searchTerm, setSearchTerm] = useState(''); // 🔍 Новое состояние

    const filteredProducts = products
        .filter(product =>
            product.price >= minPrice &&
            product.price <= maxPrice &&
            (category ? product.category === category : true) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Поиск по названию
        )
        .sort((a, b) =>
            sortBy === 'price' ? a.price - b.price : b.rating - a.rating
        );

    return (
        <div className={styles.page}>
            <h1>Продукция</h1>

            <div className={styles.filters}>
                {/* 🔍 Поле поиска */}
                <div className={styles.filterGroup}>
                    <label>Поиск по названию:</label>
                    <input
                        type="text"
                        placeholder="Например: горный"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Фильтры по цене и категории */}
                <div className={styles.filterGroup}>
                    <label>Минимальная цена: {minPrice} ₽</label>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <label>Максимальная цена: {maxPrice} ₽</label>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <label>Категория:</label>
                    <select onChange={(e) => setCategory(e.target.value)} value={category}>
                        <option value="">Все категории</option>
                        <option value="Горные">Горные</option>
                        <option value="Шоссейные">Шоссейные</option>
                        <option value="Детские">Детские</option>
                        <option value="Электровелосипеды">Электровелосипеды</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label>Сортировать по:</label>
                    <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                        <option value="price">Цене</option>
                        <option value="rating">Рейтингу</option>
                    </select>
                </div>
            </div>

            <div className={styles.productList}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;