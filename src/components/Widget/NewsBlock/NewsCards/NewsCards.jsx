import React from "react";
import styles from "./newsCards.module.scss";
import NewsGenerator from "../NewsGenerator/NewsGenerator.jsx";
import NewsData from "../NewsCards/newsData.js";

const NewsCard = () => {
    return (
        <>
            <div className={styles.newsItem}>
                <h4 className={styles.newsItemWrapper}>Новости</h4>
                <div className={styles.newsCardList}>
                    <NewsGenerator data={NewsData} />
                </div>
            </div>
        </>
    );
};

export default NewsCard;
