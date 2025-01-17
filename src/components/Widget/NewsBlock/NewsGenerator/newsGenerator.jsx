import React from "react";
import { Link } from "react-router-dom";
import styles from "./newsGenerator.module.scss";

export default function NewsGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props и его ключи, data, и type.
    return (
        <div className={styles.newsGenerator}>
            <div className={styles.newsItem}>
                {data.map((bulletin) => (
                    <div key={bulletin.id} className={styles.cardContainer}>
                        <Link to={`/bulletin/${type}/${bulletin.id}`}>
                            <img
                                className={styles.newsImg}
                                src={bulletin.image}
                                alt={bulletin.title}
                            />
                            <p className={styles.newsTitle}>{bulletin.title}</p>
                        </Link>
                        {/* при клике перекидвает сначала на bulletin потом на type 
						потом по id и после этого вся информция записывается в URL
						и после этого начинается подгружаться компонент NewsPage
						*/}
                    </div>
                ))}
            </div>
        </div>
    );
}
