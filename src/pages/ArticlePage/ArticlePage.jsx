import React, { useEffect } from "react";
import styles from "./articlePage.module.scss";
import { useParams } from "react-router-dom";
import HeroHeader from "../../components/Widget/LayoutsComponentsBlock/HeroHeader/heroHeader";
import articleData from "../../components/Widget/ArticlesBlock/ArticlesCard/ArticlesData";
import FormatText from "../../components/Widget/FormatText/FormatText";

const ArticlePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const article = articleData.find((article) => article.id === id);
    // получаем ту article с такой id и ту статью приводим на нашу константу
    // вместо type -  встанет массив articleData
    return (
        <div className={styles.articleCard}>
            <HeroHeader />
            <div className={styles.articlePage}>
                <div className={styles.articlePageContainer}>
                    <img
                        src={article.image}
                        alt="newsImg"
                        className={styles.newsImg}
                    />
                    <h2>
                        <FormatText text={article.title} />
                    </h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
