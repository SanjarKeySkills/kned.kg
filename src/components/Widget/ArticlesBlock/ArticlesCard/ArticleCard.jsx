import React from "react";
import styles from "./articlesCard.module.scss";
import ArticlesGenerator from "../ArticlesGenerator/ArticlesGenerator.jsx";
import ArticlesData from "./ArticlesData.js";

const ArticlesCard = () => {
    return (
        <div className={styles.articlesItem}>
            <div className={styles.articlesItemContainer}>
                <div className={styles.articlesItemWrapper}>
                    <h3>СТАТЬИ</h3>
                    <p>
                        Эксперты Палаты Независимых Директоров Кыргызской
                        Республики делятся своими статьями и аналитическими
                        материалами. Здесь размещены ценные публикации,
                        отражающие их профессиональный опыт и свежие взгляды в
                        области системы корпоративного управления и некоторых
                        смежных отраслей.
                    </p>
                    <ArticlesGenerator data={ArticlesData} type="type" />
                </div>
            </div>
        </div>
    );
};

export default ArticlesCard;
