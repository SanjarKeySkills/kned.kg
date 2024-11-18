import React from "react";
import styles from "./articlesCard.module.scss";
import ArticlesGenerator from "../ArticlesGenerator/ArticlesGenerator.jsx";
import ArticlesData from "./ArticlesData.js";

const ArticleCard = () => {
    return (
        <>
            <div className={styles.articleCard}>
                <div className={styles.articleItem}>
                    <p className={styles.articleTitle}>СТАТЬИ И ПУБЛИКАЦИИ</p>
                    <p className={styles.articleInfo}>
                        На данной странице члены Палаты Независимых Директоров
                        Кыргызской Республики делятся своими статьями и
                        аналитическими материалами. Здесь размещены ценные
                        публикации, отражающие их профессиональный опыт и свежие
                        взгляды в области системы корпоративного управления и
                        некоторых смежных отраслей.
                    </p>
                    <div className={styles.articleCardList}>
                        <ArticlesGenerator data={ArticlesData} type="type" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleCard;
