import React from "react";
import styles from "./NewsGenerator.module.scss";

function NewsGenerator({ data, type }) {
    //деструктуризируем из объекта сам объект props и его ключи, data, и type.

    return (
        <div className={styles.newsGenerator}>
            <div className={styles.newsItem}>
                {data.map((bulletin) => (
                    <div key={bulletin.id} className={styles.cardContainer}>
                        <a href={`/bulletin/${type}/${bulletin.id}`}>
                            <img
                                className={styles.newsImg}
                                src={bulletin.image}
                                alt={bulletin.name}
                            />
                            <p className={styles.newsTitle}>{bulletin.title}</p>
                        </a>
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

export default NewsGenerator;
