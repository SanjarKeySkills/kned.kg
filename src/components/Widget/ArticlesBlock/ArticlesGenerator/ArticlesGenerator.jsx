import React from "react";
import styles from "./articlesGenerator.module.scss";
import { Link } from "react-router-dom";

const ArticlesGenerator = ({ data, type }) => {
    //деструктуризируем из объекта сам объект props, его ключи, data и type.
    return (
        <div className={styles.articleList}>
            {data.map((article) => (
                <div key={article.id}>
                    <div className={styles.articleText}>
                        <img
                            className={styles.authorImg}
                            src={article.image}
                            alt={article.author}
                        />
                        <div className={styles.articleInfoWrapper}>
                            <div className={styles.articleInfo}>
                                <a
                                    href={`/article/${type}/${article.id}`}
                                    className={styles.linkArticle}>
                                    <h2>{article.title}</h2>
                                </a>
                                <p>{article.annotation}</p>
                                <p>{article.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticlesGenerator;
