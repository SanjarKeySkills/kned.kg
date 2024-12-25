import React from "react";
import styles from "./newsCards.module.scss";
import newsGenerator from "../NewsGenerator/newsGenerator.jsx";
import NewsData from "../NewsCards/newsData.js";

const NewsCard = () => {
    return (
        <>
            <div className={styles.newsItem}>
                <div className={styles.newsItemWrapper}>
                    <p className={styles.newsTitle}>НОВОСТИ</p>
                    <div className={styles.newsCardList}>
                        <newsGenerator data={NewsData} type="type" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCard;
