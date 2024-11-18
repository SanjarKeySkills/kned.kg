import React from "react";
import styles from "./newsCards.module.scss";
import NewsGenerator from "../NewsGenerator/NewsGenerator.jsx";
import NewsData from "../NewsCards/newsData.js";

const NewsCard = () => {
    return (
        <>
            <div className={styles.newsItem}>
                <div className={styles.newsItemWrapper}>
                    <p className={styles.newsTitle}>НОВОСТИ</p>
                    <div className={styles.newsCardList}>
                        <NewsGenerator data={NewsData} type="type" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCard;
