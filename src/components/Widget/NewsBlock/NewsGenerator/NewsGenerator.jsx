import React from "react";
import styles from "./NewsGenerator.module.scss";
import { Link } from "react-router-dom";

function NewsGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props и его ключи, data, и type.

    return (
        <div className={styles.newsItem}>
            {data.map((bulletin) => (
                <div key={bulletin.id} className={styles.cardContainer}>
                    <img
                        className={styles.newsImg}
                        src={bulletin.image}
                        alt={bulletin.name}
                    />
                    <div className={styles.newsInfo}>
                        <p className={styles.newsTitle}>{bulletin.title}</p>
                        <p>{bulletin.annotation}</p>
                        <Link
                            to={`/bulletin/${type}/${bulletin.id}`}
                            className={styles.newslink}>
                            ЧИТАТЬ
                        </Link>
                        {/* при клике перекидвает сначала на bulletin потом на type 
						потом по id и после этого вся информция записывается в URL
						и после этого начинается подгружаться компонент NewsPage
						*/}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsGenerator;
